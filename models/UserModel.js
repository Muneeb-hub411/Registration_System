import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  Status: {
    type: Boolean,
  },
  role: {
    type: Number,
    default: 0,
  },
});
export default mongoose.model("user", UserSchema);
