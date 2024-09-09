import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },

  challan: {
    type: String,
    required: true,
  },
});
export default mongoose.model("student", StudentSchema);
