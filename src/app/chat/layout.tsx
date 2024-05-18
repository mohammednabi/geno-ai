import React from "react";
import Sidebar from "./components/Sidebar";
import ButtomInput from "./components/ButtomInput";

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <Sidebar />
      <div className="grid grid-rows-[10fr_1fr] w-full h-screen bg-stone-950 p-5">
        {children}
        <ButtomInput />
      </div>
    </div>
  );
};

export default ChatLayout;
