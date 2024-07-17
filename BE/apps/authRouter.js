import { Router } from "express";
import { supabase } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birth_date,
      email,
      password,
      phone,
      gender,
    } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    const userData = {
      first_name,
      last_name,
      birth_date,
      email,
      password: passwordHash,
      phone,
      gender,
    };
    const { data, error, status } = await supabase
      .from("Users")
      .insert([userData])
      .select();

    if (error) {
      console.error("Error inserting user data:", error);
      return res
        .status(status)
        .json({ message: "Error inserting user data", error: error.message });
    }
    return res.status(201).json({ message: "Registration successful", data });
  } catch (error) {
    console.error("Server error:", error);
    return res
      .status(500)
      .json({ message: "Error occurred from Server:", error: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const supabaseResult = await supabase
      .from("users")
      .select("*")
      .eq("email", req.body.email);
    if (supabaseResult.data.length !== 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        supabaseResult.data[0].password
      );
      if (!isValidPassword) {
        return res.status(200).json({
          message: { password: "Password Invalid" },
        });
      }
      const token = jwt.sign(
        {
          first_name: supabaseResult.data[0].first_name,
          last_name: supabaseResult.data[0].last_name,
          birth_date: supabaseResult.data[0].birth_date,
          email: supabaseResult.data[0].email,
          phone: supabaseResult.data[0].phone,
          gender: supabaseResult.data[0].gender,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1d",
        }
      );
      return res.json({
        message: "login successfully",
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default authRouter;
