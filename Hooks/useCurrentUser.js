import useSWR from "swr";
import axios from "axios";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/sessionUser", (url) =>
    axios.get(url).then((res) => res.data)
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
