import useSWR from "swr";
import axios from "axios";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favorites",
    (url) => axios.get(url).then((res) => res.json),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading, mutate };
};

export default useFavorites;
