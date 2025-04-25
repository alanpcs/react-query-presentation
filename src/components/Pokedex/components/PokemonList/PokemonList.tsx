import { useCaughtPokemon } from "../../../../services/queries/useCaughtPokemon";
import { usePokemonList } from "../../../../services/queries/usePokemonList";
import { PokeLoading } from "../../../PokeLoading/PokeLoading";
import { FilterType } from "../Filters.tsx/Filters";
import { PokemonListItem } from "./components/PokemonListItem";
import { StyledPokemonList } from "./PokemonList.styles";

// type Generations = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// type Filters = `generation-${Generations}`;

type PokemonListProps = {
  onSelectPokemon: (id: number) => void;
  filter?: FilterType;
};

export const PokemonList = (props: PokemonListProps) => {
  const { onSelectPokemon, filter } = props;
  const pokemonListQuery = usePokemonList({ filter, pageSize: 30 });
  const caughtsQuery = useCaughtPokemon();
  const isLoading = pokemonListQuery.isLoading || caughtsQuery.isLoading;
  const pokemonListData = filter === "caught" ? caughtsQuery.data : pokemonListQuery.data;

  if (pokemonListQuery.error) {
    return <p>Error: {pokemonListQuery.error?.message || ""}</p>;
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
