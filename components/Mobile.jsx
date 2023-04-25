const Mobile = () => {
  return (
    <div className="bg-black w-60 absolute top-8 left-0 py-5 flex-col  ">
      <div className="flex flex-col gap-6">
        <div className="px-4 hover:underline text-white text-center">Home</div>
        <div className="px-4 hover:underline text-white text-center">
          Popular
        </div>
        <div className="px-4 hover:underline text-white text-center">Shows</div>
        <div className="px-4 hover:underline text-white text-center">
          Movies
        </div>
        <div className="px-4 hover:underline text-white text-center">
          My list
        </div>
      </div>
    </div>
  );
};

export default Mobile;
