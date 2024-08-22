import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UserRegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [department, setDepartment] = useState("");
  const [rollno, setRollno] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register-user", {
        name,
        email,
        Password: password,
        Phone: phoneno,
        Department: department,
        RollNo: rollno,
      });
      if (res && res.data.success) {
        toast.success("User Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Error in Registering");
      console.log(error);
    }
  };

  return (
    <div className="bg-custom-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneno}
              onChange={(e) => {
                setPhoneno(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rollNo"
              className="block text-sm font-medium text-gray-700"
            >
              Roll No
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={rollno}
              onChange={(e) => {
                setRollno(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/admin-register")}
            type="button"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register as admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterForm;
