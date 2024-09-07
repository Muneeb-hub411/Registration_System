import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { connectdb } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
connectdb();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/student", studentRoutes);

app.get("/", (req, res) => {
  try {
    res.send("<h1>Our Website is running</h1>");
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getting url",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on :", process.env.PORT);
});
