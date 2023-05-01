import Hero from "@/components/Hero";
import MoviesList from "@/components/MoviesList";
import Nav from "@/components/Nav";
import { getSession } from "next-auth/react";
import useMovies from "@/Hooks/useMovies";
import useFavorites from "@/Hooks/useFavorites";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Nav />
      <Hero />
      <MoviesList title="Trending Now" data={movies} />
      <MoviesList title="My list" data={favorites} />
    </>
  );
}
