// src/components/layout/Layout.tsx
"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ChatBot } from "../ui/ChatBot";
import { featuredMovies } from "@/data/movies";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Radial gradient circle that extends beyond top edge */}
      <div
        className="absolute w-full h-[50vh] top-0 left-0 opacity-90 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center -50vh, rgb(128, 0, 128) 30%, transparent 100%)",
          zIndex: 0,
        }}
      />

      <Header />
      <div className="flex pt-16 relative z-10">
        <main className="flex-1">{children}</main>
      </div>
      <Sidebar />
      <ChatBot movies={featuredMovies} />
    </div>
  );
};
