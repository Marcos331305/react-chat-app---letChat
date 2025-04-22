const ChatArea = ({ messages, isLoading }) => (
  <div className="flex flex-col space-y-4">
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      messages?.map((msg, index) => (
        <div key={index} className="flex flex-col">
          <div
            className={`p-2 ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {msg.text}
          </div>
        </div>
      ))
    )}
  </div>
);

export default ChatArea;
