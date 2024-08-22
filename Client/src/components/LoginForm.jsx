import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsAdmin((prev) => !prev); // Toggle isAdmin state
  };

  return (
    <div className="bg-custom-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isAdmin ? "Login as Admin" : "Login as User"}
        </h2>
        <form className="space-y-4">
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
