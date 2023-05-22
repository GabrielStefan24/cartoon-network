import useHero from "@/Hooks/useHero";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayBtn from "./PlayBtn";
import { useCallback } from "react";
import useModal from "@/Hooks/useModal";

const Hero = () => {
  const { openModal } = useModal();
  const { data } = useHero();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative sm:h-[40.25vw] h-2/4 ">
      <video
        className="w-full sm:h-[40.25vw] h-full object-cover brightness-[50%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[40%] md:top-[35%] ml-10 md:ml-14 w-3/5">
        <p className="text-white font-bold  text-xl md:text-5xl  h-full  ">
          {data?.title}
        </p>
        <p className="text-white mt-4 text-[9px] md:text-[14px] lg:text-[18px] w-full lg:w-2/3">
          {data?.description}
        </p>

        <div className="flex gap-3 mt-2  lg:mt-4 items-center">
          <PlayBtn movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="text-white bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-1 md:px-2 text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex gap-1 items-center"
          >
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
