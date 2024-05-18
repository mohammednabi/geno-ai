import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export const gptAnswerTheQuestion = async (question: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: question, name: "ge" }],
    model: "gpt-3.5-turbo",
  });

  console.log("chat gpt answer :", completion.choices);
};
