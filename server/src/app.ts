import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDb } from "./db/dbConfig";
dotenv.config();

connectDb();
const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/getUsers", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "successfully get users from this port",
  });
  return;
});

app.listen(3000, () => {
  console.log(`server is running on ${3000}`);
});
