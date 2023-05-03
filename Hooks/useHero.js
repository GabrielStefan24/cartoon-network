import useSwr from "swr";
import axios from "axios";

const useHero = () => {
  const { data, error, isLoading } = useSwr(
    "/api/randomVideo",
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

export default useHero;
