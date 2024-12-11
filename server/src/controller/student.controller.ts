import { Request, Response } from "express";
import { Student } from "../models/student.model";
import verifyPassword from "../utils/verifyPassword";

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

const studentLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "all fileds are required!!",
      });
      return;
    }

    const user = await Student.findOne({ email });
    if (!user) {
      res.status(403).json({
        message: "unauthorized user",
      });
      return;
    }

    const isMatch = await verifyPassword(user.password, password);

    if (!isMatch) {
      res.status(403).json({
        success: false,
        message: "invalid credentials",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "user login successfull",
    });
    return;
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  studentRegistration,
  studentLogin,
};
