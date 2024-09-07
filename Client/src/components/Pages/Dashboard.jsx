import { useAuth } from "../Context/AuthContext";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(auth)}</pre>
    </div>
  );
};

export default Dashboard;
