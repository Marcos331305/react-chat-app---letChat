import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "@/redux/api/authApiSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatsHeader = ({ onLogout, onSearch }) => {
  const [logout, { isLoading }] = useLogoutMutation();
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
    <header className="w-full px-4 py-3 border-b">
      {/* Top row: App name + Logout */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-primary">letChat</h1>
        <Button variant="destructive" size="sm" onClick={logoutUser}>
          Logout
        </Button>
      </div>

      {/* Bottom row: Search bar */}
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Search users to chat..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
      </div>
    </header>
  );
};

export default ChatsHeader;
