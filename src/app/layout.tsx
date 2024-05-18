import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import { ChattingStoreProvider } from "@/providers/ChattingContextProvider";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GENO ",
  description: "A platform based on ai for asking or generating images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChattingStoreProvider>{children}</ChattingStoreProvider>
      </body>
    </html>
  );
}
