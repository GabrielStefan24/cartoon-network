import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

const PlayBtn = ({ movieId }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/watchMovie/${movieId}`)}
      className="cursor-pointer bg-white rounded-lg py-1 md:py-2 px-2 md:px-4 text-xs lg:text-lg flex items-center justify-center font-semibold transition hover:bg-neutral-400"
    >
      <BsFillPlayFill />
      Play
    </div>
  );
};

export default PlayBtn;
