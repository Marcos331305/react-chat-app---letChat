import { MessageBox } from "react-chat-elements";

const MsgBox = ({ message, isSender }) => {
// only show the message status(read receipts) for the sender's messages(only on sender's side)
const showStatus = isSender && message?.status;
  return (
    <MessageBox
      type={"text"}
      text={message.msg}
      position={isSender ? "right" : "left"}
      status={showStatus ? message?.status : undefined}
    />
  );
};

export default MsgBox;
