import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteService } from "../FavoriteService";

export const useCatchPokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["catch"],
    mutationFn: favoriteService.addSavedItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};
