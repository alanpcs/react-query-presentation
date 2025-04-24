import { useQuery } from "@tanstack/react-query";
import { PokemonDetails } from "../types";

export const usePokemonDetails = (pokemonId: number) => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const query = useQuery<PokemonDetails>({
    queryKey: ["pokemon", pokemonId],
    queryFn: async () => {
      const response = await fetch(pokemonUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedResponse = await response.json();

      return { ...parsedResponse, url: pokemonUrl };
    },
    enabled: !!pokemonId,
  });

  return query;
};
