import { usePokemonList } from "../../requests/queries/usePokemonList";
import { Typography } from "../Typography/Typography";
import { PokemonListItem } from "./components/PokemonListItem";
import { StyledPokemonList, StyledLoading } from "./PokemonList.styles";

type PokemonListProps = {
  onSelectPokemon: (id: number) => void;
};

export const PokemonList = (props: PokemonListProps) => {
  const { onSelectPokemon } = props;
  const { data: pokemonListData, isLoading, error } = usePokemonList();

  if (error) {
    return <p>Error: {error?.message || ""}</p>;
  }
  if (!isLoading && !pokemonListData) {
    return <p>No Pokémon found.</p>;
  }
  return (
    <>
      <StyledPokemonList>
        {isLoading && (
          <StyledLoading>
            <img src="https://userstyles.org/style_screenshots/158452_after.gif" alt="Loading..." />
            <Typography>Loading...</Typography>
          </StyledLoading>
        )}
        {!isLoading && (
          <>
            {pokemonListData?.map((pokemon, index) => (
              <PokemonListItem
                key={index}
                {...pokemon}
                index={index}
                onSelectPokemon={onSelectPokemon}
              />
            ))}
            {pokemonListData?.length === 0 && <p>No Pokémon found.</p>}
          </>
        )}
      </StyledPokemonList>
      <hr />
      {pokemonListData?.length && <p>Total Pokémon: {pokemonListData?.length}</p>}
    </>
  );
};
