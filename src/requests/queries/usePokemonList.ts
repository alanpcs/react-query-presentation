// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

type PokemonListItem = {
  name: string;
  url: string;
};

export const usePokemonList = () => {
  // const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const fetchPokemon = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  //       const data = await response.json();
  //       setPokemon(data.results);
  //     } catch (error) {
  //       const errorMessage = error instanceof Error ? `Error fetching Pokémon: ${error.message}` : "Unknown error";
  //       console.error(errorMessage);
  //       setError(new Error(errorMessage));
  //     }
  //     finally{
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchPokemon();
  // }, []);

  // return {data: pokemon, isLoading, error};

  const pokemonListQuery = useQuery<PokemonListItem[]>({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedResponse = await response.json();
      return parsedResponse.results;
    }
  });

  return pokemonListQuery;
}
