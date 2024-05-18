import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_AI_KEY ?? ""
);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const genminiAnswerTheQuestion = async (question: string) => {
  const prompt = question;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
  // console.log("gemini answer :", text);
};
