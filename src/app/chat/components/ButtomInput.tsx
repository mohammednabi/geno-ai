"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";

import { gptAnswerTheQuestion } from "@/app/utils/openAiUtils";
import { genminiAnswerTheQuestion } from "@/app/utils/geminiAiUtils";
import { useChattingStore } from "@/providers/ChattingContextProvider";
import { Chat } from "@/store/form-store";

const ButtomInput = () => {
  // const [question, setQuestion] = useState("");
  // const [question,setQuestion] = useState("")

  const {
    setInput,
    addNewChatToList,
    setIsLoadingFalse,
    setIsLoadingTrue,
    isLoading,
  } = useChattingStore((state) => state);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData: FieldValues) => {
    // console.log({ formData });
    setIsLoadingTrue();

    const question = formData.question;
    reset();
    setInput(question);
    // gptAnswerTheQuestion(question);
    const answer = await genminiAnswerTheQuestion(question);
    const newChat: Chat = { question, answer };
    addNewChatToList(newChat);
    setIsLoadingFalse();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data, e) => {
          e?.preventDefault();
          submitForm(data);
        })}
        className="flex w-full  items-center space-x-2 px-40"
      >
        <Input
          {...register("question")}
          type="text"
          disabled={isLoading}
          placeholder="Message Geno"
          className="rounded-xl h-16 bg-stone-900 border-none focus:border-stone-700 focus:border-[1px] focus:border-solid select-none"
        />
        <Button
          title="Send message"
          className="bg-stone-900 flex justify-center items-center cursor-pointer select-none hover:bg-stone-900  h-14 rounded-xl aspect-square"
          // onClick={() => {
          //   formRef.current?.submit();
          // }}
          type="submit"
        >
          <FaArrowCircleRight className="text-stone-200 text-3xl" />
        </Button>
      </form>
    </div>
  );
};

export default ButtomInput;
