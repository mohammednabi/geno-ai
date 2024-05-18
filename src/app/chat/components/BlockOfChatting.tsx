"use client";
import WhiteLogoCircle from "@/components/WhiteLogoCircle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface BlockOfchattingProps {
  // Define your props here
  question: string;
  answer: string;
}

const BlockOfchatting = ({ question, answer }: BlockOfchattingProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-[1fr_15fr] items-center gap-3">
        <Avatar className="border-white border-[1px] border-solid">
          <AvatarImage src="/user-unknown.png" className="invert" />
          <AvatarFallback>you</AvatarFallback>
        </Avatar>

        <h1 className="text-lg capitalize">you</h1>
        <h2 className="text-sm text-stone-400 col-start-2">{question}</h2>
      </div>
      <div className="grid grid-cols-[1fr_15fr] items-center gap-3">
        <WhiteLogoCircle size="sm2" />

        <h1 className="text-lg capitalize">geno</h1>

        <TypeAnimation
          sequence={[
            answer, // Types 'answer'
            // 100, // Waits 100ms
          ]}
          wrapper="p"
          speed={99}
          cursor={false}
          className="text-sm text-stone-400 col-start-2"
          // splitter={(answer)=>answer.split("*")}
          splitter={(str) => str.split(/(?= )/)}
        />
        {/* <h2 >{answer}</h2> */}
      </div>
    </div>
  );
};

export default BlockOfchatting;
