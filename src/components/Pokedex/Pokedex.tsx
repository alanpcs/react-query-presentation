import { useState } from "react";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";
import { PokemonList } from "./components/PokemonList/PokemonList";
import styled from "styled-components";
import { Filters } from "./components/Filters.tsx/Filters";
import { ElementType } from "../../requests/types";

export const Pokedex = () => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<ElementType | undefined>();

  return (
    <>
      <Filters onSelectFilter={setSelectedFilter} filter={selectedFilter} />
      <StyledPokedex>
        <PokemonDetails pokemonId={selectedPokemonId} />
        <PokemonList onSelectPokemon={setSelectedPokemonId} filter={selectedFilter} />
      </StyledPokedex>
    </>
  );
};

const StyledPokedex = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
`;
