import { Request, Response } from "express";
import { Student } from "../models/student.model";

const studentRegistration = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required!!",
      });
    }
    const student = new Student({ name, email, password });
    await student.save();
    return res.status(201).json({
      success: true,
      message: "user created successfully",
      data: student,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  studentRegistration,
};
