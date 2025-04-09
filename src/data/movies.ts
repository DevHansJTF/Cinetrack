// src/data/movies.ts
import { Movie } from "@/types";

export const featuredMovies: Movie[] = [
  {
    id: "1",
    title: "Mufasa: The Lion King",
    posterUrl:
      "https://lumiere-a.akamaihd.net/v1/images/wonderwall_intl_payoff_poster_philippines_english_9f86c0fe.jpeg?region=0%2C0%2C770%2C1100", // Using placeholder API
    releaseDate: "December 18",
    genre: ["Animation", "Adventure"],
  },
  {
    id: "2",
    title: "Cinderella",
    posterUrl:
      "https://static0.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/cinderella-live-action-movie-poster.jpg",
    releaseDate: "March 13",
    genre: ["Fantasy", "Romance"],
  },
  {
    id: "3",
    title: "Transformers: Rise of the Beasts",
    posterUrl:
      "https://i.ebayimg.com/00/s/MTYwMFgxMTE5/z/P7wAAOSwtqFkYoTI/$_57.JPG?set_id=8800005007",
    releaseDate: "June 9",
    genre: ["Action", "Sci-Fi"],
  },
  {
    id: "4",
    title: "The Bondsman",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BZjczOGY5MzEtYWJiNS00ZDQyLThhNzAtZTVhMTkxOWI3MjczXkEyXkFqcGc@._V1_.jpg",
    releaseDate: "April 15",
    genre: ["Action", "Thriller"],
  },
  {
    id: "5",
    title: "House of David",
    posterUrl:
      "https://lh3.googleusercontent.com/proxy/1VuSYxOaPp4BjndfLhx_tH1nQHGxLXB5kmtCO5KXHfkRBmBgF35M3mbxX7rqibNF5uPnkmcNWiUt96qzOunruP1K2ZhM6vUY_g",
    releaseDate: "April 20",
    genre: ["Historical", "Drama"],
  },
];
