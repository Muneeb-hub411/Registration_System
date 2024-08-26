import { useAuth } from "../Context/AuthContext";
import Navbar from "./../Navbar";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
