import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetteReads - Choose your news",
  description: "Simply Read News with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bebas.className}>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-[#202020] text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
