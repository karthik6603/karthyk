// src/app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // ✅ safe to use client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ server-side only
export const metadata: Metadata = {
  title: "Karthik P | Java Full Stack Developer ",
  description:
    "Crafting high-performance web applications with Java, Spring Boot, and React. Explore my projects, passion, and path as a backend-focused full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar /> {/* ✅ now injected safely */}
        {children}
      </body>
    </html>
  );
}
