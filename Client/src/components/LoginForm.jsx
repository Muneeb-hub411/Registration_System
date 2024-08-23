import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./Context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsAdmin((prev) => !prev); // Toggle isAdmin state
  };
  const HandleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login-user", {
        email,
        Password: password,
      });
      if (res && res.data.success) {
        toast.success("User Logged in successfully");
        navigate("/home");
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
      }
    } catch (error) {
      toast.error("Error in logging in");
      console.log(error);
    }
  };
  const HandleAdminLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/v1/auth/login-admin", {
        email,
        Password: password,
      });
      if (res && res.data.success) {
        toast.success("Admin Logged in successfully");
        navigate("/dashboard");
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
      }
    } catch (error) {
      toast.error("Error in logging in");
      console.log(error);
    }
  };

  return (
    <div className="bg-custom-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isAdmin ? "Login as Admin" : "Login as User"}
        </h2>
        <form
          className="space-y-4"
          onSubmit={isAdmin ? HandleAdminLogin : HandleUserLogin}
        >
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
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
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
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="isAdmin"
              name="isAdmin"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={isAdmin}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="isAdmin"
              className="ml-2 block text-sm text-gray-900"
            >
              Login as Admin
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => navigate("/")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
