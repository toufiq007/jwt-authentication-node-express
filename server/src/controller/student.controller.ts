import { Request, Response } from "express";
import { Student } from "../models/student.model";

const studentRegistration = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "all fields are required!!",
      });
      return;
    }
    const student = new Student({ name, email, password });
    await student.save();
    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: student,
    });
    return;
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  studentRegistration,
};
