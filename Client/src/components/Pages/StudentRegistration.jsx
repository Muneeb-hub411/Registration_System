import { useState } from "react";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    challan: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, challan: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle form submission
    console.log(formData);
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
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="department"
              value={formData.department}
              onChange={handleChange}
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
