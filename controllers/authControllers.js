export const registerController = async (req, res) => {
  try {
    const { name, email, Phone, Department, RollNo } = req.body;
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone number is required" });
    }
  } catch (error) {
    console.log("Error in Registen :", error);
    return res.status(500).send({
      success: false,
      message: "Error in registering new user",
    });
  }
};
