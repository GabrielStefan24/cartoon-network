import axios from "axios";
import { useCallback, useMemo } from "react";
import useFavorites from "@/Hooks/useFavorites";
import useCurrentUser from "@/Hooks/useCurrentUser";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

const AddFavorite = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: user, mutate } = useCurrentUser();
  const isFavorite = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  });
  const toggle = useCallback(async () => {
    let response;
    if (isFavorite) {
      response = await axios.delete("/api/favorite", { params: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...user,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, user, mutate, mutateFavorites]);
  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggle}
      className=" group/item flex justify-center items-center h-7 w-7 lg:h-10 lg:w-10 border-white border-2 transition hover:border-neutral-400 rounded-full cursor-pointer"
    >
      <Icon size={22} className="text-white group" />
    </div>
  );
};

export default AddFavorite;
