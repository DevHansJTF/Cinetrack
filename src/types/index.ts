// src/types/index.ts
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate?: string;
  genre?: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  recommendations?: Movie[];
}
