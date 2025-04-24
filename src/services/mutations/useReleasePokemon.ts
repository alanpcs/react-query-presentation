import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteService } from "../FavoriteService";

export const useReleasePokemon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["release"],
    mutationFn: favoriteService.removeSavedItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};
