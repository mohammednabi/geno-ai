"use client";
import React, { useEffect, useRef, useState } from "react";
import WhiteLogoCircle from "@/components/WhiteLogoCircle";
import BlockOfchatting from "./BlockOfChatting";
import { useChattingStore } from "@/providers/ChattingContextProvider";
import Loader from "@/components/Loader";

interface ChatPageContainerProps {
  // Define your props here
}

const ChatPageContainer = ({}: ChatPageContainerProps) => {
  const [startChatting, setStartChatting] = useState(true);
  const { chats, isLoading } = useChattingStore((state) => state);
  const dummyRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    dummyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [isLoading]);

  return (
    <div className="w-full h-full overflow-auto ">
      {/* <div className="flex justify-center items-center w-full h-full">
        <h1>select your model</h1>
      </div> */}

      {chats.length === 0 ? (
        <>
          {!isLoading ? (
            <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
              <WhiteLogoCircle size="2xl" />
              <h1 className="text-2xl capitalize">how can i help you</h1>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
              <Loader />
            </div>
          )}
        </>
      ) : (
        <div className="px-56 py-10 flex flex-col gap-10">
          {chats.map((chat, index) => (
            <BlockOfchatting
              key={index}
              question={chat.question}
              answer={chat.answer}
            />
          ))}
        </div>
      )}
      {isLoading && chats.length > 0 && <Loader size="xs" />}

      {chats.length > 0 && (
        <div
          ref={dummyRef}
          key={"dummy-page"}
          className="w-full h-10 bg-transparent"
        />
      )}
    </div>
  );
};

export default ChatPageContainer;
