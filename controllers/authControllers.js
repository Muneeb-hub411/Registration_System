import { encryptpass } from "../helpers/passwordHashing.js";
import AdminModel from "../models/AdminModel.js";
import UserModel from "../models/UserModel.js";
export const UserRegisterController = async (req, res) => {
  try {
    const { name, Password, email, Phone, Department, RollNo } = req.body;
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
    if (!RollNo) {
      return res.send({ message: "RollNo is required" });
    }
    if (!Department) {
      return res.send({ message: "Department is required" });
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
