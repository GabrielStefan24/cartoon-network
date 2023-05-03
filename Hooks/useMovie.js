import useSWR from "swr";
import axios from "axios";

const useMovie = (id) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    id ? `/api/Movies/${id}` : null,
    fetcher,
    id
      ? {
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }
      : undefined
  );

  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovie;
