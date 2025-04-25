import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useLogoutMutation } from "@/redux/api/authApiSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

const ChatsHeader = ({ searchUser, searchText, setSearchText }) => {
  const currentUserId = useSelector((state) => state.auth.user.$id);
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchText, 300);

  // handling searchUser with debouncing
  useEffect(() => {
    if (debouncedSearchTerm.trim().length >= 3) {
      // userSearch will be triggered here
      searchUser({
        searchText: debouncedSearchTerm,
        currentUserId: currentUserId,
      });
    }
  }, [debouncedSearchTerm]);

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
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:w-1/2"
        />
      </div>
    </header>
  );
};

export default ChatsHeader;
