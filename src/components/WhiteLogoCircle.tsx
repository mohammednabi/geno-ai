import Image from "next/image";
import React from "react";

interface WhiteLogoCircleProps {
  // Define your props here
  size?: "xs" | "sm" | "sm2" | "md" | "xl" | "2xl";
}

const WhiteLogoCircle = ({ size = "md" }: WhiteLogoCircleProps) => {
  return (
    <div
      className={`rounded-full flex justify-center items-center border-solid border-white border-[1px] ${
        size === "xs" && "h-6 w-6"
      } ${size === "sm" && "h-8 w-8"} ${size === "sm2" && "h-10 w-10"} ${
        size === "md" && "h-12 w-12"
      } ${size === "xl" && "h-16 w-16"} ${size === "2xl" && "h-20 w-20"} p-1`}
    >
      <Image
        src={"/white-logo-without-text.webp"}
        alt=""
        width={1920}
        height={1080}
        className="h-1/2 w-auto  "
      />
    </div>
  );
};

export default WhiteLogoCircle;
