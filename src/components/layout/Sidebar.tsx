// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { User, Home, Heart, LayoutGrid, Settings, X } from "lucide-react";
import { useLayout } from "@/context/LayoutContext";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayout();

  const navItems = [
    { name: "My Profile", path: "/profile", icon: <User size={24} /> },
    { name: "Home", path: "/", icon: <Home size={24} /> },
    { name: "Favorite Movies", path: "/favorites", icon: <Heart size={24} /> },
    { name: "Movie Boards", path: "/boards", icon: <LayoutGrid size={24} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={24} /> },
  ];

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="pt-20 px-6 h-full">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white cursor-pointer"
        >
          <X size={24} />
        </button>

        <nav>
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="flex items-center gap-3 hover:text-gray-300 py-2"
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
