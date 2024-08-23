// App.js
import AdminRegisterForm from "./components/AdminRegisterForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import UserRegisterForm from "./components/UserRegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserRegisterForm />} />
          <Route path="/admin-register" element={<AdminRegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          {/* Ensure /dashboard/admin renders the Dashboard component */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
