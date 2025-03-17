"use client";

import Navbar from "@/components/NavBar";
import { ReactNode } from "react";
import "@/app/globals.css";
import "@/app/fonts.css";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}