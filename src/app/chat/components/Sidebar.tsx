import WhiteLogoCircle from "@/components/WhiteLogoCircle";
import Image from "next/image";
import React from "react";
import { PiPlus } from "react-icons/pi";
import SmallNav from "./SmallNav";

interface SidebarProps {
  // Define your props here
}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="w-full h-screen bg-stone-900 py-5 px-2">
      <SmallNav />
      <div className="w-full h-auto  flex justify-between items-center gap-5 capitalize transition-all hover:bg-stone-800 cursor-pointer p-2 rounded-full">
        <div className="flex items-center gap-3">
          <WhiteLogoCircle size="sm" />
          <h1>new chat</h1>
        </div>
        <PiPlus className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;
