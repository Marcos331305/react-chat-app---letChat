import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetUserId, setTargetUserName } from "@/redux/slices/chatSlice";

export const useTargetUserFromStorage = (chatId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chatId) return;

    const targetUserId = localStorage.getItem("targetUserId");
    const targetUserName = localStorage.getItem("targetUserName");

    if (targetUserId && targetUserName) {
      dispatch(setTargetUserId(targetUserId));
      dispatch(setTargetUserName(targetUserName));
    }
  }, [chatId, dispatch]);
};
