import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "@/redux/api/authApiSlice";
import ChatsHeader from "@/components/chat/ChatsHeader";
import ChatList from "@/components/chat/ChatList";

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
    <div className="flex flex-col h-screen p-4 gap-4 border-2 border-red-400">
      {/* Header (fixed height) */}
      <ChatsHeader />

      {/* Chat list grows to fill remaining height */}
      <ChatList />
    </div>
  );
};

export default Dashboard;
