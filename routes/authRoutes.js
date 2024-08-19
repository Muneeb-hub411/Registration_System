import express from "express";
const router = express.Router();
import {
  UserRegisterController,
  AdminRegisterController,
} from "../controllers/authControllers.js";

router.post("/register-user", UserRegisterController);

router.post("/register-admin", AdminRegisterController);
export default router;
