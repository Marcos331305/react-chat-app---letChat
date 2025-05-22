import { MessageBox } from "react-chat-elements";

const MsgBox = ({ message, isSender }) => {
  return (
    <MessageBox
      type={"text"}
      text={message.msg}
      position={isSender ? "right" : "left"}
    />
  );
};

export default MsgBox;
