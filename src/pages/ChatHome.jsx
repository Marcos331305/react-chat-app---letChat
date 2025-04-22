import ChatsHeader from "@/components/chat_home/chatsHeader";
import ChatList from "@/components/chat_home/chatList";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      {/* Header (fixed height) */}
      <ChatsHeader />

      {/* Chat list grows to fill remaining height */}
      <ChatList />
    </div>
  );
};

export default Dashboard;
