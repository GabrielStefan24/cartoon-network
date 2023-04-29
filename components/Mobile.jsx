const Mobile = () => {
  return (
    <div className="bg-black w-60 absolute top-8 left-0 py-5 flex-col  ">
      <div className="flex flex-col gap-6">
        <div className="px-4 hover:text-slate-300 text-white text-center text-base">
          Home
        </div>
        <div className="px-4 hover:text-slate-300 text-white text-center text-base">
          Popular
        </div>
        <div className="px-4 hover:text-slate-300 text-white text-center text-base">
          Shows
        </div>
        <div className="px-4 hover:text-slate-300 text-white text-center text-base">
          Movies
        </div>
        <div className="px-4 hover:text-slate-300 text-white text-center text-base">
          My list
        </div>
      </div>
    </div>
  );
};

export default Mobile;
