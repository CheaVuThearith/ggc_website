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
      <body className={`${inter.className} size-full`}>
        <Navbar />
        <section
          className={`my-14 flex max-w-screen-2xl flex-col gap-y-20 px-8 size-full`}
        >
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
