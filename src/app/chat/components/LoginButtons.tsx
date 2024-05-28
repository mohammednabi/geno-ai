import { Button } from "@/components/ui/button";
import React from "react";

const LoginButtons = () => {
  return (
    <div className="flex flex-col gap-2 px-2 pb-3 ">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-sm capitalize">Sign up or log in</h1>
        <p className="text-xs capitalize text-white/50">
          Get smarter responses, upload files and images, and more.
        </p>
      </div>
      <Button
        // variant={"outline"}

        className="rounded-xl capitalize bg-green-700 hover:bg-green-700/90 "
      >
        sign up
      </Button>
      <Button
        variant={"outline"}
        className="rounded-xl capitalize bg-stone-800 hover:bg-stone-800/90"
      >
        login
      </Button>
    </div>
  );
};

export default LoginButtons;
