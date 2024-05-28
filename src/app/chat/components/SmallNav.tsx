import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallNav = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center pb-5">
      <Link href={"/"}>
        <Image
          src={"/Geno new logo colored.webp"}
          alt=""
          height={200}
          width={200}
          className="h-8 w-auto"
        />
      </Link>
    </div>
  );
};

export default SmallNav;
