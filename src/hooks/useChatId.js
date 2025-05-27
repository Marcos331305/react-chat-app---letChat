import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";

import { setActiveChatId } from "@/redux/slices/chatSlice";

/*
 * Hook to generate a deterministic chatId between current user and selected user.
 * Memoized to avoid recalculating on every render.
 */

const useChatId = (currentUserId, selectedUserId) => {
  const dispatch = useDispatch();

  const chatId = useMemo(() => {
    const localKey = "activeChatId";

    if (selectedUserId && currentUserId) {
      const ids = [currentUserId, selectedUserId].sort();
      const computedChatId = `${ids[0]}_${ids[1]}`;
      localStorage.setItem(localKey, computedChatId);
      return computedChatId;
    }

    // If no selectedUserId, try to get last active from localStorage
    const stored = localStorage.getItem(localKey);
    return stored || null;
  }, [currentUserId, selectedUserId]);

  useEffect(() => {
    if (chatId) {
      dispatch(setActiveChatId(chatId));
    }
  }, [chatId, dispatch]);

  return chatId;
};

export default useChatId;