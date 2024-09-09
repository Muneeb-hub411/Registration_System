import StudentModel from "../models/StudentModel.js";

export const studentRegisterController = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const challan = req.file;
    console.log(challan);
    const student = await new StudentModel({
      name,
      email,
      department,
      challan: challan.path,
    }).save();
    return res.status(200).send({
      success: true,
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Errror in registering student",
      error,
    });
  }
};

export const getAllStudentController = async (req, res) => {
  try {
    const student = await StudentModel.find({});
    if (!student) {
      return res.status(400).send({
        success: false,
        message: "No Student Found",
      });
    }
    return res.status(200).send({
      success: true,
      student,
    });
  } catch (error) {}
};
