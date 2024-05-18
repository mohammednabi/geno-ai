import React from "react";

interface LoaderProps {
  // Define your props here
  size?: "xs" | "sm" | "sm2" | "md" | "xl" | "2xl";
}

const Loader = ({ size = "md" }: LoaderProps) => {
  return (
    <div className={`flex items-center gap-5 w-full justify-center h-auto `}>
      <div
        className={`${size === "xs" && "h-6 w-6"} ${
          size === "sm" && "h-8 w-8"
        } ${size === "sm2" && "h-10 w-10"} ${size === "md" && "h-12 w-12"} ${
          size === "xl" && "h-16 w-16"
        } ${size === "2xl" && "h-20 w-20"} bg-white animate-bounce`}
      />
      <div
        className={`${size === "xs" && "h-6 w-6"} ${
          size === "sm" && "h-8 w-8"
        } ${size === "sm2" && "h-10 w-10"} ${size === "md" && "h-12 w-12"} ${
          size === "xl" && "h-16 w-16"
        } ${size === "2xl" && "h-20 w-20"} bg-white animate-bounce`}
        style={{ animationDelay: ".1s" }}
      />
      <div
        className={`${size === "xs" && "h-6 w-6"} ${
          size === "sm" && "h-8 w-8"
        } ${size === "sm2" && "h-10 w-10"} ${size === "md" && "h-12 w-12"} ${
          size === "xl" && "h-16 w-16"
        } ${size === "2xl" && "h-20 w-20"} bg-white animate-bounce`}
        style={{ animationDelay: ".2s" }}
      />
    </div>
  );
};

export default Loader;
