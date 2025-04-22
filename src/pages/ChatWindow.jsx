import Navbar from "@/components/chat_window/Navbar";
import ChatArea from "@/components/chat_window/ChatArea";
import MsgInput from "@/components/chat_window/MsgInput";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar username="User Name" />

      {/* Chat Area */}
      <div className="flex-grow overflow-auto p-4">
        <ChatArea />
      </div>

      {/* Message Box */}
      <div className="p-4 border-t border-gray-300">
        <MsgInput />
      </div>
    </div>
  );
};

export default ChatWindow;
