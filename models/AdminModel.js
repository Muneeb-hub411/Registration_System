import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  Password: {
    type: String,
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

  role: {
    type: Number,
    default: 1,
  },
});
export default mongoose.model("admin", AdminSchema);
