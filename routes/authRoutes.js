import express from "express";
const router = express.Router();
import {
  UserRegisterController,
  AdminRegisterController,
  UserLoginController,
  AdminLoginController,
  tester,
  checker,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middleware/middleware.js";

router.post("/register-user", UserRegisterController);

router.post("/register-admin", AdminRegisterController);

router.get("/testing", requireSignIn, isAdmin, tester);

router.post("/login-user", UserLoginController);
router.post("/login-admin", AdminLoginController);

//protected routes
router.get("/user-auth", requireSignIn, checker);
router.get("/admin-auth", requireSignIn, isAdmin, checker);
export default router;
