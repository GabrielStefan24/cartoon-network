import Hero from "@/components/Hero";
import MoviesList from "@/components/MoviesList";
import Nav from "@/components/Nav";
import { getSession } from "next-auth/react";
import useMovies from "@/Hooks/useMovies";
import useFavorites from "@/Hooks/useFavorites";
import Modal from "@/components/Modal";
import useModal from "@/Hooks/useModal";
import { useState } from "react";
import Head from "next/head";

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
  const [filter, setFilter] = useState(null);
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <Head>
        <title>Cartoon Network</title>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Modal visible={isOpen} onClose={closeModal} />
      <Nav setFilter={setFilter} />
      <Hero />
      <MoviesList
        title="Trending Now"
        data={movies.filter((movie) =>
          filter ? movie.genre === filter : true
        )}
      />
      <MoviesList title="My list" data={favorites} />
    </>
  );
}
