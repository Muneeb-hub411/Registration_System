import express from "express";
import {
  studentRegisterController,
  getAllStudentController,
} from "../controllers/studentControllers.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post(
  "/register-student",
  upload.single("challan"),

  studentRegisterController
);

router.get("/all-students", getAllStudentController);
export default router;
