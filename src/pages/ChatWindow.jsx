import Navbar from "@/components/chat_window/Navbar";
import ChatArea from "@/components/chat_window/ChatArea";
import MsgInput from "@/components/chat_window/MsgInput";

const ChatWindow = () => {
  const messages = [
    {
      text: "Hello, how are you?",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
    {
      text: "I'm good, thanks! How about you?",
      senderId: "680b7cc8001cb2e5e16b",
      receiverId: "6807f74c00203bb10949",
    },
    {
      text: "Then What are you doing?",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
    {
      text: "Not much, just chilling. what about you?",
      senderId: "680b7cc8001cb2e5e16b",
      receiverId: "6807f74c00203bb10949",
    },
    {
      text: "Chatting with you. Nothing else.",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
    {
      text: "Then tell me what whats new?",
      senderId: "680b7cc8001cb2e5e16b",
      receiverId: "6807f74c00203bb10949",
    },
    {
      text: "I want to ask about a movie recommendation.",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
    {
      text: "let me think about it.",
      senderId: "680b7cc8001cb2e5e16b",
      receiverId: "6807f74c00203bb10949",
    },
    {
      text: "Have you thinked about it?",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
    {
      text: "Have you seen latest new bollywood movie?",
      senderId: "680b7cc8001cb2e5e16b",
      receiverId: "6807f74c00203bb10949",
    },
    {
      text: "Which one?This is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheckThis is a BIG test message to check overflow handling! 🌍🔥 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🚀✨ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Testing #ChatUI #OverflowCheck",
      senderId: "6807f74c00203bb10949",
      receiverId: "680b7cc8001cb2e5e16b",
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar username="User Name" />

      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto p-4">
        <ChatArea messages={messages} />
      </div>

      {/* Message Sending Box */}
      <div className="p-4 border-t border-gray-300">
        <MsgInput />
      </div>
    </div>
  );
};

export default ChatWindow;
