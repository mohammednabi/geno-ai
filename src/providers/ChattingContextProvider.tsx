"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import {
  type ChattingStoreType,
  createChattingStore,
} from "../store/form-store";

export const ChattingStoreContext =
  createContext<StoreApi<ChattingStoreType> | null>(null);

export interface ChattingStoreProviderProps {
  children: ReactNode;
}

export const ChattingStoreProvider = ({
  children,
}: ChattingStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ChattingStoreType>>();

  if (!storeRef.current) {
    storeRef.current = createChattingStore();
  }

  return (
    <ChattingStoreContext.Provider value={storeRef.current}>
      {children}
    </ChattingStoreContext.Provider>
  );
};

export const useChattingStore = <T,>(
  selector: (store: ChattingStoreType) => T
): T => {
  const chattingStoreContext = useContext(ChattingStoreContext);

  if (!chattingStoreContext) {
    throw new Error(
      `useChattingStore must be use within ChattingStoreProvider`
    );
  }

  return useStore(chattingStoreContext, selector);
};
