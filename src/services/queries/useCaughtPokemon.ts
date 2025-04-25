import { useQuery } from "@tanstack/react-query";
import { caughtService } from "../CaughtService";

export const useCaughtPokemon = () => {
  const caughtsQuery = useQuery({
    queryKey: ["caughts"],
    queryFn: caughtService.getSavedItems,
  });

  return caughtsQuery;
};
