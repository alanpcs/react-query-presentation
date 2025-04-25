import { useMutation, useQueryClient } from "@tanstack/react-query";
import { caughtService } from "../CaughtService";

export const useCatchPokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["catch"],
    mutationFn: caughtService.addSavedItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["caughts"] });
    },
  });
};
