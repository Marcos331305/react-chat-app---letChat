const MsgBox = ({ message, isSender }) => {
  // Determine alignment
  const alignmentClass = isSender ? "items-end" : "items-start";

  return (
    <div className={`flex flex-col ${alignmentClass}`}>
      <div
        className={
          "max-w-[80%] lg:max-w-[60%] p-3 rounded-2xl bg-gray-100 break-words whitespace-pre-wrap overflow-hidden"
        }
      >
        <p className="text-gray-800 text-sm md:text-base">{message.msg}</p>
      </div>
    </div>
  );
};

export default MsgBox;
