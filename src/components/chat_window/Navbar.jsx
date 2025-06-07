import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const targetUserName = useSelector((state) => state.chat.targetUserName);

  const handleBackClick = () => {
    navigate("/letchat");
  };
  return (
    <div className="flex items-center p-4 border-b">
      <div className="flex items-center gap-2">
        <ArrowLeft
          onClick={handleBackClick}
          className="w-5 h-5 text-gray-700 cursor-pointer"
        />{" "}
        {/* Adjusted size & color */}
        <h3 className="font-medium text-gray-900">{targetUserName}</h3>
      </div>
    </div>
  );
};

export default Navbar;
