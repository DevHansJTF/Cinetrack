// src/components/ui/ChatBot.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";
import type { Movie, ChatMessage } from "@/types";
import cenbot from "@/app/assets/cenbot.png";

interface ChatBotProps {
  movies: Movie[];
}

export const ChatBot = ({ movies }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Please recommend top 2 Thriller Movies",
      sender: "user",
    },
    {
      id: "2",
      text: "Sure! Here are the top 2 Thriller Movies:",
      sender: "bot",
      recommendations: movies.slice(0, 2),
    },
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: input,
        sender: "user",
      },
    ]);

    setInput("");

    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: `I've processed your request: "${input}"`,
          sender: "bot",
          recommendations: input.toLowerCase().includes("thriller")
            ? movies.filter((m) => m.genre?.includes("Thriller")).slice(0, 2)
            : undefined,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Bot Toggle Button */}
      <button
        className="fixed bottom-6 right-6 rounded-full bg-white p-3 shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-12 h-12">
          <Image
            src={cenbot}
            alt="Cenbot"
            width={48}
            height={48}
            className="object-contain rounded-full"
          />
        </div>
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-2 py-1 whitespace-nowrap">
          Want Movie Recs?
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-72 md:w-80 bg-blue-900 rounded-lg shadow-xl overflow-hidden z-50">
          <div className="flex items-center justify-between bg-blue-950 p-3">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src={cenbot}
                  alt="Cenbot"
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-semibold text-white">Cenbot</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-3 flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-3 rounded-lg max-w-[85%] ${
                  message.sender === "user"
                    ? "bg-blue-950 text-white self-end"
                    : "bg-white text-black self-start"
                }`}
              >
                <p>{message.text}</p>
                {message.recommendations && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {message.recommendations.map((movie) => (
                      <div
                        key={movie.id}
                        className="relative h-24 w-16 mx-auto"
                      >
                        <Image
                          src={movie.posterUrl}
                          alt={movie.title}
                          fill
                          className="object-cover rounded"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-1">
                          <p className="text-white text-xs text-center">
                            {movie.title.split(":")[0]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex p-3 border-t border-blue-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-l-lg px-3 py-2 focus:outline-none text-white"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="text-white rounded-lg px-3 py-2"
              onClick={handleSendMessage}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
