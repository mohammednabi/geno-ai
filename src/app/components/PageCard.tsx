import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface PageCardProps {
  // Define your props here
  img: string;
  title: string;
  description: string;
  url: string;
}

const PageCard = ({ title, img, description, url }: PageCardProps) => {
  const router = useRouter();

  const goToUrl = () => {
    router.push(url);
  };

  return (
    <Link
      href={url}
      className="bg-gradient-to-r from-stone-950 to-black w-full h-full flex flex-col gap-5 rounded-xl border-mainGreen/25 shadow-sm shadow-mainGreen-500 border-solid border-2 cursor-pointer "
    >
      <Image
        src={img}
        alt="card image"
        width={1920}
        height={1080}
        className="w-full aspect-video rounded-xl"
      />
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-2xl capitalize ">{title}</h1>
        <h2 className="text-lg capitalize text-stone-500">{description}</h2>
        <Button
          variant={"secondary"}
          className="capitalize bg-stone-800"
          onClick={goToUrl}
        >
          go to page
        </Button>
      </div>
    </Link>
  );
};

export default PageCard;
