// src/app/page.tsx
import { Layout } from "@/components/layout/Layout";
import { FeaturedSection } from "@/components/movies/FeaturedSection";
import { featuredMovies } from "@/data/movies";

export default function Home() {
  return (
    <Layout>
      <FeaturedSection title="BEST OF APRIL" movies={featuredMovies} />
    </Layout>
  );
}
