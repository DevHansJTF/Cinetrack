// src/components/movies/MovieCard.tsx
"use client";

import Image from "next/image";
import { Movie } from "@/types";

interface MovieCardProps {
  movie: Movie;
  isSelected?: boolean;
  onClick?: () => void;
}

export const MovieCard = ({
  movie,
  isSelected = false,
  onClick,
}: MovieCardProps) => {
  return (
    <div
      className={`relative cursor-pointer transition-transform duration-300 hover:scale-105`}
      onClick={onClick}
    >
      <div
        className={`relative aspect-[2/3] w-full overflow-hidden rounded-lg ${
          isSelected ? "ring-2 ring-yellow-500" : ""
        }`}
      >
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 20vw"
          priority
        />
      </div>
      <div className="pt-2 pb-4">
        <h3 className="text-center text-sm font-medium text-white">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};
