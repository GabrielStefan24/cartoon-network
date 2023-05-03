import { BsFillPlayCircleFill } from "react-icons/bs";
import AddFavorite from "./AddFavorite";
import { useRouter } from "next/router";

const MovieCard = ({ data }) => {
  const router = useRouter();
  return (
    <div className="group col-span-1 relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition  shadow-xl rounded-md group-hover:opacity-60 sm:group-hover:opacity-0 w-full h-[12vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="absolute top-0 transition duration-300 z-10 invisible sm:visible  w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={data.thumbnailUrl}
          alt="Movie"
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center w-7 h-7 lg:w-10 lg:h-10 "
              onClick={() => router.push(`/watchMovie/${data?.id}`)}
            >
              <BsFillPlayCircleFill
                size={40}
                className="cursor-pointer transition text-white hover:text-neutral-400 "
              />
            </div>
            <AddFavorite movieId={data?.id} />
          </div>
          <p className="text-green-400 font-semibold mt-2">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex mt-2 gap-2 items-center">
            <p className="text-white text-sm lg:text-md">{data.duration}</p>
          </div>
          <div className="flex mt-2 gap-2 items-center">
            <p className="text-white text-sm lg:text-md">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
