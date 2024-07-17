import { Router } from "express";
import { supabase } from "../utils/db.js";
import jwt from "jsonwebtoken";
import { protect } from "../middlewares/protect.js";
import "dotenv/config";

const userRouter = Router();
userRouter.use(protect);

userRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Users").select("*");

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json({ error: "Unexpected error" });
  }
});

userRouter.get(":/id", async (req, res) => {
  const id = req.params.id;
  const result = await supabase.from("users").select("*").eq("id", id);
  if (result.statusText === "OK") {
    const token = jwt.sign(
      {
        id: result.data[0].id,
        first_name: result.data[0].first_name,
        last_name: result.data[0].last_name,
        birth_date: result.data[0].birth_date,
        email: result.data[0].email,
        phone: result.data[0].phone,
        gender: result.data[0].gender,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.json({ message: "Fetching successful", token });
  } else {
    return res.status(500).send(`API ERROR: ${result.error}`);
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const result = await supabase.from("Users").insert([
      {
        first_name: ` ${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        birth_date: `${req.body.birth_date}`,
        email: `${req.body.email}`,
        phone: `${req.body.phone}`,
        gender: `${req.body.gender}`,
      },
    ]);

    if (result.statusText === "OK") {
      return res.json({ message: "Create users successfully" });
    } else {
      return res.status(400).send(`API ERROR`);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Unexpected error" });
  }
});

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data: existingUser, error: fetchError } = await supabase
      .from("Users")
      .select("id")
      .eq("id", id)
      .single();

    if (fetchError || !existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { data, error } = await supabase
      .from("Users")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select(); // เพิ่ม .select() เพื่อให้ Supabase ส่งคืนข้อมูลที่อัปเดต

    if (error) {
      throw error;
    }

    console.log("Update response data:", data);
    console.log("Request body:", req.body);

    if (!data || data.length === 0) {
      return res.status(200).json({ message: "No changes made to user", data });
    }

    return res.json({ message: "Updated user successfully", data });
  } catch (error) {
    console.error("Error updating user", error);
    return res.status(500).send("API PUT ERROR");
  }
});

export default userRouter;
