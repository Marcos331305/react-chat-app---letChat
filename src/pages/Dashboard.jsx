import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/api/authApiSlice";

const Dashboard = () => {
  const [logout, { isLoading, error }] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await logout().unwrap();

      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
        <div>welcome to Dashboard</div>
        <Button onClick={logoutUser}>logout</Button>
      </div>
    </>
  );
};

export default Dashboard;
