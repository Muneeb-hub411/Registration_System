import { comparePass, encryptpass } from "../helpers/passwordHashing.js";
import jwt from "jsonwebtoken";
import AdminModel from "../models/AdminModel.js";
import UserModel from "../models/UserModel.js";
export const UserRegisterController = async (req, res) => {
  try {
    const { name, Password, email, Phone, Department, RollNo } = req.body;
    if (!name) {
      return res.status(404).send({ message: "Name is required" });
    }
    if (!Password) {
      return res.status(404).send({ message: "Password is required" });
    }
    if (!email) {
      return res.status(404).send({ message: "Email is required" });
    }
    if (!Phone) {
      return res.status(404).send({ message: "Phone number is required" });
    }
    if (!RollNo) {
      return res.status(404).send({ message: "RollNo is required" });
    }
    if (!Department) {
      return res.status(404).send({ message: "Department is required" });
    }

    const existinguser = await UserModel.findOne({ email });
    if (existinguser) {
      return res.status(400).send({
        success: false,
        message: "User already exist",
      });
    }
    const hashedpassword = await encryptpass(Password);
    const user = await new UserModel({
      name,
      Password: hashedpassword,
      email,
      Phone,
      RollNo,
      Department,
    }).save();
    res.status(200).send({
      success: true,
      message: "You are Registered Successfully",
      user,
    });
  } catch (error) {
    console.log("Error in Registering :", error);
    return res.status(500).send({
      success: false,
      message: "Error in registering new user",
    });
  }
};

export const AdminRegisterController = async (req, res) => {
  try {
    const { name, Password, email, Phone } = req.body;
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!Password) {
      return res.send({ message: "Password is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone number is required" });
    }

    const existinguser = await AdminModel.findOne({ email });
    if (existinguser) {
      return res.status(400).send({
        success: false,
        message: "Admin already exist",
      });
    }
    const hashedpassword = await encryptpass(Password);
    const admin = await new AdminModel({
      name,
      Password: hashedpassword,
      email,
      Phone,
    }).save();
    res.status(200).send({
      success: true,
      message: "You are Registered Successfully",
      admin,
    });
  } catch (error) {
    console.log("Error in Registering :", error);
    return res.status(500).send({
      success: false,
      message: "Error in registering new user",
    });
  }
};

export const UserLoginController = async (req, res) => {
  try {
    const { email, Password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User doesnt exist",
      });
    }
    const passcheck = await comparePass(Password, user.Password);
    if (!passcheck) {
      return res.status(404).send({
        success: false,
        message: "Email or Password is incorrect",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("error in logging in :", error);
    return res.status(500).send({
      success: false,
      message: "Error in logging in",
    });
  }
};

export const AdminLoginController = async (req, res) => {
  try {
    const { email, Password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(404).send({
        success: false,
        message: "Admin doesnt exist",
      });
    }
    const passcheck = await comparePass(Password, admin.Password);
    if (!passcheck) {
      return res.status(404).send({
        success: false,
        message: "Email or Password is incorrect",
      });
    }
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      admin,
      token,
    });
  } catch (error) {
    console.log("error in logging in :", error);
    return res.status(500).send({
      success: false,
      message: "Error in logging in",
    });
  }
};

export const tester = async (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: "Person is signed in and Admin as well",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Person is not admin or not sign in",
    });
  }
};

export const checker = async (req, res) => {
  try {
    return res.status(200).send({
      ok: true,
    });
  } catch (error) {
    console.log("error :", error);
  }
};
