import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GGC",
  description:
    "Green Growth Cycle, a website promoting sustainability and inspiring eco-friendly living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-primary flex flex-col items-center justify-center"
    >
      <body
        className={`my-14 flex w-[100%] max-w-screen-2xl flex-col gap-y-20 overflow-x-hidden px-8 ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
