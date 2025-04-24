import { useQuery } from "@tanstack/react-query";

export const usePokemonGeneration = (number: number) => {
  const query = useQuery({
    queryKey: ["generation"],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/generation/${number}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedResponse = await response.json();
      return parsedResponse.results;
    },
  });

  return query;
};
