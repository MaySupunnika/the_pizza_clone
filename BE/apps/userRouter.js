import { Router } from "express";
import { supabase } from "../utils/db.js";

const userRouter = Router();

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

// userRouter.get(":/id", async(req, res)=>{
//   const id = req.params.id;
//   const result = await supabase.from("Users").select("*").eq("user_id",id)

// })

userRouter.post("/", async (req, res) => {
  try {
    const result = await supabase.from("Users").insert([
      {
        user_name: req.body.name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone: req.body.phone,
      },
    ]);

    if (result.error) {
      console.error("Error inserting user:", result.error.message);
      res.status(500).json({ error: result.error.message });
    } else {
      res.json({ message: "Created new user successfully" });
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Unexpected error" });
  }
});

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, error } = await supabase
      .from("Users")
      .update({
        user_name: req.body.name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone: req.body.phone,
      })
      .eq("user_id", id);
    if (error) {
      throw error;
    }
    res.json({ message: "Updated user successfully", data });
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).send("API PUT ERROR");
  }
});

export default userRouter;
