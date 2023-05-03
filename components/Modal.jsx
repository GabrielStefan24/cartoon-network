import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayBtn from "./PlayBtn";
import AddFavorite from "./AddFavorite";
import useModal from "@/Hooks/useModal";
import useMovie from "@/Hooks/useMovie";

const Modal = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const { movieId } = useModal();
  const { data } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  if (!visible) {
    return null;
  }
  return (
    <div className="z-50 transition duration-300 bg-black/90 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative px-10 md:max-w-4xl rounded-xl overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-200 relative  bg-zinc-900  `}
        >
          <div className="relative">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-75  h-full"
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer right-3 top-3 h-10 md:w-12 w-10 rounded-full bg-black/80 flex items-center justify-center absolute"
            >
              <AiOutlineClose className="text-white" size={18} />
            </div>
            <div className="absolute left-10 bottom-4">
              <p className="text-white text-xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex gap-3 items-center">
                <PlayBtn movieId={data?.id} />
                <AddFavorite movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <p className="text-green-400 font-semibold md:text-lg ">New</p>
            <p className="text-white font-semibold md:text-lg ">
              Duration : {data?.duration}
            </p>
            <p className="text-red-400 font-semibold md:text-lg mb-2">
              Genre : {data?.genre}
            </p>
            <p className="text-neutral-400 font-semibold md:text-lg text-xs">
              Description{" "}
              <span className="block text-white mt-1">{data?.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
