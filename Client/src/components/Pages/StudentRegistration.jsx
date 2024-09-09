import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

const StudentRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [challan, setChallan] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleFileChange = (e) => {
    setChallan(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("department", department);
      formdata.append("challan", challan);
      const res = await axios.post(
        "/api/v1/student/register-student",
        formdata
      );
      if (res?.data.success) {
        toast.success("Form Submitted");
      } else {
        toast.error("Error in submission");
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div
      name="Register now"
      className="bg-custom-gradient min-h-screen flex items-center justify-center"
    >
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Student Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium">
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={handleDepartmentChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Business Administration">
                Business Administration
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="challan" className="block text-sm font-medium">
              Upload Challan
            </label>
            <input
              type="file"
              id="challan"
              name="challan"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
