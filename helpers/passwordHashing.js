import bcrypt from "bcrypt";

export const encryptpass = async (password) => {
  try {
    const saltrounds = 3;
    const hashedpassword = await bcrypt.hash(password, saltrounds);
    return hashedpassword;
  } catch (error) {
    console.log("error in hasing :", error);
  }
};
export const comparePass = async (password, hashedpassword) => {
  try {
    return await bcrypt.compare(password, hashedpassword);
  } catch (error) {
    console.log("Error in comparing pass", error);
  }
};
