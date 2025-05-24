import { useMemo } from "react";

import { useDispatch } from "react-redux";

import { setActiveChatId } from "@/redux/slices/chatSlice";

/*
 * Hook to generate a deterministic chatId between current user and selected user.
 * Memoized to avoid recalculating on every render.
 */

const useChatId = (currentUserId, selectedUserId) => {
  const dispatch = useDispatch();
  const chatId = useMemo(() => {
    if (!currentUserId || !selectedUserId) return null;

    // Sort to ensure consistency regardless of sender/receiver order
    const ids = [currentUserId, selectedUserId].sort();
    console.log("ChatId: ", `${ids[0]}_${ids[1]}`);
    dispatch(setActiveChatId(`${ids[0]}_${ids[1]}`));
    return `${ids[0]}_${ids[1]}`;
  }, [currentUserId, selectedUserId]);

  return chatId;
};

export default useChatId;
