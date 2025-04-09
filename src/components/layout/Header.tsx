// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useLayout } from "@/context/LayoutContext";

interface HeaderProps {
  showAllMoviesButton?: boolean;
}

export const Header = ({ showAllMoviesButton = true }: HeaderProps) => {
  const { toggleSidebar } = useLayout();

  return (
    <header className="flex justify-between items-center w-full px-6 py-4 bg-black text-white fixed top-0 left-0 right-0 z-40">
      <Link href="/" className="text-3xl font-bold font-mono">
        Cinetrack
      </Link>

      <div className="flex items-center gap-4">
        {showAllMoviesButton && (
          <Link
            href="/movies"
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md"
          >
            All Movies
          </Link>
        )}

        <button
          onClick={toggleSidebar}
          className="text-white cursor-pointer"
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};
