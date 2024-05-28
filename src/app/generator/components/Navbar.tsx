import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center p-5 justify-between ">
      <Link href={"/"}>
        <Image
          src={"/Geno new logo colored.webp"}
          alt=""
          height={200}
          width={200}
          className="h-10 w-full"
        />
      </Link>
      <div>
        <Button>login</Button>
      </div>
    </header>
  );
};

export default Navbar;
