import useSWR from "swr";
import axios from "axios";

const useMovies = () => {
  const { data, error, isLoading } = useSWR(
    "/api/movies",
    (url) => axios.get(url).then((res) => res.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};
export default useMovies;
