"use client";
import React from "react";
import PageCard from "./PageCard";
import { motion } from "framer-motion";
import Image from "next/image";

interface HomePageContainerProps {
  // Define your props here
}

const HomePageContainer = ({}: HomePageContainerProps) => {
  return (
    <div className=" flex flex-col gap-5  items-center w-full h-screen px-20 py-5">
      <div className="flex flex-col  items-center gap-5">
        <Image
          src={"/Geno new logo colored.webp"}
          alt=""
          width={1920}
          height={1080}
          className="h-12 w-auto  "
        />
        <h1 className="text-4xl capitalize font-bold ">select a tool</h1>
      </div>

      <div className=" grid grid-cols-2 gap-10 w-full px-20">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <PageCard
            img="/cat-chatting.jpg"
            title="geno chat"
            description="ask geno chat any question you want ,an ai chat model that help you
          with your tasks"
            url="/chat"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <PageCard
            img="/generated-img1.jpg"
            title="geno image generator"
            description="generate any image you want with some prompts with any style you love"
            url="/generator"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePageContainer;
