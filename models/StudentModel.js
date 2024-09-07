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
  Department: {
    type: String,
    required: true,
  },

  Challan: {
    data: Buffer,
    contentType: String,
  },
});
export default mongoose.model("student", StudentSchema);
