import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    wishlist: [],
    addMovie: ({ id, name }) =>
      set((state) => ({ wishlist: [...state.wishlist, { id, name }] })),
    removeMovie: (movieId) =>
      set((state) => {
        const newWishlist = state.wishlist.filter(
          ({ id: wishlistId }) => wishlistId !== movieId
        );

        return { wishlist: newWishlist };
      }),
  }))
);
export default useStore;
