import express, { Application, Request, Response } from "express";

const app: Application = express();

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
