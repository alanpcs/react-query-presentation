import { useQuery } from "@tanstack/react-query";
import { favoriteService } from "../FavoriteService";

export const useCaughtPokemon = () => {
  const favoritesQuery = useQuery({
    queryKey: ["favorites"],
    queryFn: favoriteService.getSavedItems,
  });

  return favoritesQuery;
};
