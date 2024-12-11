import { Request, Response } from "express";
import { Student } from "../models/student.model";

const studentRegistration = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      res.status(400).json({
        success: false,
        message: "all fields are required!!",
      });
      return;
    }

    const isPresent = await Student.findOne({ email });
    if (isPresent) {
      res.status(400).json({
        success: false,
        message: "user is already present",
      });
    }
    // const student = new Student({ name, email, password });
    // await student.save();
    const student = await Student.create({ userName, email, password });
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
