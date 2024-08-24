import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../components/Context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const UserProtectedRoutes = () => {
  const [ok, setOk] = useState(null); // Start with null to represent loading state
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authcheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/user-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          toast.error("Access Denied");
          navigate("/login");
        }
      } catch (error) {
        setOk(false);
        toast.error("Access Denied");
        navigate("/login");
        console.log(error);
      }
    };

    if (auth?.token) {
      authcheck();
    } else {
      setOk(false);
      navigate("/login");
    }
  }, [auth?.token, navigate]);

  if (ok === null) return null; // Render nothing or a loading spinner while checking

  return ok ? <Outlet /> : null;
};

export default UserProtectedRoutes;
