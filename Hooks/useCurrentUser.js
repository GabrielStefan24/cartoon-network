import useSwr from "swr";
import axios from "axios";

const useCurrentUser = () => {
  const { data, error, isLoading } = useSwr("/api/sessionUser", (url) =>
    axios.get(url).then((res) => res.data)
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useCurrentUser;
