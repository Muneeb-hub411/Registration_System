import AdminRegisterForm from "./components/AdminRegisterForm";
import LoginForm from "./components/LoginForm";
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
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
