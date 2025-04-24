import { usePokemonList } from "../../../../requests/queries/usePokemonList";
import { ElementType } from "../../../../requests/types";
import { PokeLoading } from "../../../PokeLoading/PokeLoading";
import { PokemonListItem } from "./components/PokemonListItem";
import { StyledPokemonList } from "./PokemonList.styles";

// type Generations = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// type Filters = `generation-${Generations}`;

type PokemonListProps = {
  onSelectPokemon: (id: number) => void;
  filter?: ElementType;
};

export const PokemonList = (props: PokemonListProps) => {
  const { onSelectPokemon, filter } = props;
  const { data: pokemonListData, isLoading, error } = usePokemonList({ filter, pageSize: 30 });

  if (error) {
    return <p>Error: {error?.message || ""}</p>;
  }
  if (!isLoading && !pokemonListData) {
    return <p>No Pokémon found.</p>;
  }
  return (
    <StyledPokemonList>
      {isLoading && <PokeLoading />}
      {!isLoading && (
        <>
          {pokemonListData?.map((pokemon) => (
            <PokemonListItem key={pokemon.name} {...pokemon} onSelectPokemon={onSelectPokemon} />
          ))}
          {pokemonListData?.length === 0 && <p>No Pokémon found.</p>}
        </>
      )}
    </StyledPokemonList>
  );
};
