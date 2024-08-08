import type { Metadata } from "next";
import { Inter, Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-Playfair_Display",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-Mulish",
});

export const metadata: Metadata = {
  title: "Alina Lee",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} ${mulish.variable}`}>
        <Header />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
