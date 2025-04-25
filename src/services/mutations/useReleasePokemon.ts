import { useMutation, useQueryClient } from "@tanstack/react-query";
import { caughtService } from "../CaughtService";

export const useReleasePokemon = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["release"],
    mutationFn: caughtService.removeSavedItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["caughts"] });
    },
  });
};
