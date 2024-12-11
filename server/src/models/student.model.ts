import mongoose, { Schema, Model, Document } from "mongoose";
import bcyrpt from "bcryptjs";
interface IStudent extends Document {
  userName: string;
  email: string;
  password: string;
  comparePassword(givenPassword: string): Promise<boolean>;
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

//  prev-save hook for hashing password
studentSchema.pre("save", async function (next) {
  if (!this.isModified(this.password)) {
    return next();
  }
  try {
    const salt = await bcyrpt.genSalt(10);
    this.password = await bcyrpt.hash(this.password, salt);
    next();
  } catch (err) {
    console.log(err);
  }
});

//  compare password
studentSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcyrpt.compare(candidatePassword, this.password);
};

export const Student: Model<IStudent> = mongoose.model(
  "Student",
  studentSchema
);
