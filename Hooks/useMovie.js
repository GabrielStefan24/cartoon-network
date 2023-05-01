import useSwr from "swr";
import axios from "axios";

const useMovie = (id) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/movies/${id}` : null,
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

export default useMovie;
