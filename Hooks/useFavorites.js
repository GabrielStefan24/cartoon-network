import useSWR from "swr";
import axios from "axios";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favorites",
    (url) => axios.get(url).then((res) => res.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log(data);
  return { data, error, isLoading, mutate };
};

export default useFavorites;
