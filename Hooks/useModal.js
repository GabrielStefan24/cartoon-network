import { create } from "zustand";

const useModal = create((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ isOpen: true, movieId: movieId }),
  closeModal: () => {
    set({ isOpen: false, movieId: undefined });
  },
}));

export default useModal;
