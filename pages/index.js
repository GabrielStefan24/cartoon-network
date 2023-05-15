import Hero from "@/components/Hero";
import MoviesList from "@/components/MoviesList";
import Nav from "@/components/Nav";
import { getSession } from "next-auth/react";
import useMovies from "@/Hooks/useMovies";
import useFavorites from "@/Hooks/useFavorites";
import Modal from "@/components/Modal";
import useModal from "@/Hooks/useModal";


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
  const { isOpen, closeModal } = useModal();
  console.log(movies);

  return (
    <>
      <Modal visible={isOpen} onClose={closeModal} />
      <Nav />
      <Hero />
      <MoviesList title="Trending Now" data={movies} />
      <MoviesList title="My list" data={favorites} />
    </>
  );
}
