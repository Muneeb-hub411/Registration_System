import { useAuth } from "../Context/AuthContext";
import { useState, useEffect } from "react";
import Navbar from "./../Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "../Card";
const Dashboard = () => {
  const onApprove = () => {};
  const [auth] = useAuth();
  const [students, setStudents] = useState([]);

  const getAllStudent = async () => {
    try {
      const res = await axios.get("/api/v1/student/all-students");
      if (res.data.success) {
        setStudents(res.data.student);
        toast.success("All user fetched");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in getting all users");
    }
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-3 p-6">
        {students.map((student) => (
          <Card
            key={student.id}
            imageUrl={`http://localhost:8080/uploads/${student.challan}`}
            name={student.name}
            email={student.email}
            department={student.department}
            onApprove={onApprove}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
