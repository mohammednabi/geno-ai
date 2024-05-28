import React from "react";
import Navbar from "./Navbar";
import GeneratorPageBody from "./GeneratorPageBody";

const GeneratorPageContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <GeneratorPageBody />
    </div>
  );
};

export default GeneratorPageContainer;
