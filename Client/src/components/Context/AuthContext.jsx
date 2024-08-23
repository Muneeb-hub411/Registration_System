import { useContext, createContext, useEffect, useState } from "react";

const context = createContext();
const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsdata = JSON.parse(data);
      setAuth({
        user: parsdata.user,
        token: parsdata.token,
      });
    }
  }, []);
  return (
    <div>
      <context.Provider value={[auth, setAuth]}>{children}</context.Provider>
    </div>
  );
};

const useAuth = () => useContext(context);

export { useAuth, AuthContext };
