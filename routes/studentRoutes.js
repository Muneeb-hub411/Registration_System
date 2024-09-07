import express from "express";
import { studentRegisterController } from "../controllers/studentControllers.js";

const router = express.Router();

router.post("/register-student", studentRegisterController);
export default router;
