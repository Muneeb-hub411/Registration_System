import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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

  role: {
    type: Number,
  },
});
export default mongoose.model("admin", AdminSchema);
