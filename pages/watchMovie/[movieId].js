import useMovie from "@/Hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WatchMovie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-6 z-20 flex items-center gap-6 bg-black/70 ">
        <AiOutlineArrowLeft
          className="text-white cursor-pointer transition hover:text-neutral-400 hover:scale-105"
          size={36}
        />
        <p className="text-white text-xl md:text-2xl">
          Watching : <span>{data?.title || "Loading..."}</span>
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default WatchMovie;
