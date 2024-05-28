import express from "express";
import bodyParser from "body-parser";
import userRouter from "./apps/userRouter.js";
import dotenv from "dotenv";
import cors from "cors";

async function init() {
  const app = express();
  const port = 4000;
  dotenv.config();
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/users", userRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
init();
