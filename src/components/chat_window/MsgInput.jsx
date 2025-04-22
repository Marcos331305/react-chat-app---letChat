const MsgInput = ({ message, setMessage }) => (
  <div className="flex items-center">
    <input
      type="text"
      className="flex-grow p-2 border rounded-md"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message..."
    />
    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
      Send
    </button>
  </div>
);

export default MsgInput;
