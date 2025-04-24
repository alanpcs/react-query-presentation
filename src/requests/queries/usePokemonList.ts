// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ElementType, TypeResult } from "../types";

type PokemonListItem = {
  name: string;
  url: string;
};

export const usePokemonList = (params?: { filter?: ElementType; pageSize: number }) => {
  const { filter, pageSize = 20 } = params || {};
  // const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const fetchPokemon = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}`);
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

  const pokemonListQuery = useQuery({
    queryKey: ["pokemonList", pageSize],
    queryFn: async () => {
      return await getPokemon(pageSize);
    },
    enabled: !filter,
  });
  const filteredPokemonQuery = useQuery({
    queryKey: ["pokemonList", pageSize, filter],
    queryFn: async () => {
      return await getFilteredPokemon(pageSize, filter || "bug");
    },
    enabled: !!filter,
  });

  return filter ? filteredPokemonQuery : pokemonListQuery;
};

const getPokemon = async (limit?: number): Promise<PokemonListItem[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const parsedResponse: { results: PokemonListItem[] } = await response.json();
  return parsedResponse.results;
};

const getFilteredPokemon = async (
  limit: number,
  filter: ElementType,
): Promise<PokemonListItem[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${filter}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const parsedResponse: TypeResult = await response.json();
  const limitedResponse = parsedResponse.pokemon.slice(0, limit);

  return limitedResponse.map(({ pokemon }) => pokemon);
};
