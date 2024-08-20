import jwt from "jsonwebtoken";
import AdminModel from "../models/AdminModel.js";
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log("error in  middleware", error);
    return res.status(500).send({
      success: false,
      message: "Person is not signed in",
    });
  }
};
export const isAdmin = async (req, res, next) => {
  try {
    const admin = await AdminModel.findById(req.user._id);
    if (admin.role != 1) {
      res.status(401).send({
        message: "person is not admin",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "person is not admin",
      success: false,
    });
  }
};
