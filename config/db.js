import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database is connected at host ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
