import type { Metadata } from "next";
import { Geist, Geist_Mono, Signika } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WiseMed",
  description: "Desafío QxWise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signika.variable} antialiased font-signika`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
