import express from "express";
import { studentController } from "../controller/student.controller";
const router = express.Router();

//  all routes
router.post("/register", studentController.studentRegistration);
router.post("/login", studentController.studentLogin);

export default router;
