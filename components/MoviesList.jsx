import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {
  return (
    <div className="px-4 md:px-14 mt-4 space-y-5">
      <p className="text-white text-xl lg:text-2xl font-bold">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
