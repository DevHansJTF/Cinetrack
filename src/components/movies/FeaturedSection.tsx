// src/components/movies/FeaturedSection.tsx
"use client";

import { useState } from "react";
import { MovieCard } from "./MovieCard";
import type { Movie } from "@/types";

interface FeaturedSectionProps {
  title: string;
  movies: Movie[];
}

export const FeaturedSection = ({ title, movies }: FeaturedSectionProps) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovieId(movie.id);
  };

  return (
    <section className="py-8">
      <h2 className=" text-4xl md:text-7xl lg:text-9xl font-bold text-white mb-8 text-center tracking-tight italic">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isSelected={movie.id === selectedMovieId}
            onClick={() => handleSelectMovie(movie)}
          />
        ))}
      </div>
    </section>
  );
};
