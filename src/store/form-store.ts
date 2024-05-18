import { createStore } from "zustand";

export type Chat = {
  question: string;
  answer: string;
};

export type ChattingStates = {
  question: string;
  chats: Chat[];
  isLoading: boolean;
};

export type ChattingActions = {
  setInput: (input: string) => void;
  addNewChatToList: (newChat: Chat) => void;
  setIsLoadingTrue: () => void;
  setIsLoadingFalse: () => void;
};

export type ChattingStoreType = ChattingStates & ChattingActions;

export const defaultInitialStates: ChattingStates = {
  chats: [],
  question: "",
  isLoading: false,
};

export const createChattingStore = (
  initState: ChattingStates = defaultInitialStates
) => {
  return createStore<ChattingStoreType>()((set) => ({
    ...initState,
    setInput: (input) => set((state) => ({ question: input })),
    addNewChatToList: (newChat: Chat) =>
      set((state) => ({ chats: [...state.chats, newChat] })),
    setIsLoadingTrue: () => set((state) => ({ isLoading: true })),
    setIsLoadingFalse: () => set((state) => ({ isLoading: false })),
  }));
};
