import mongoose, { Schema, Model, Document } from "mongoose";
interface IStudent extends Document {
  userName: string;
  email: string;
  password: string;
}

const studentSchema: Schema<IStudent> = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Student: Model<IStudent> = mongoose.model(
  "Student",
  studentSchema
);
