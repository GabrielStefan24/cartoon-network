import useHero from "@/Hooks/useHero";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Hero = () => {
  const { data } = useHero();
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[50%]"
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
          <button className="text-white bg-white bg-opacity-30 rounded-md py-1 px-2 text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex gap-1 items-center">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
