import { Typography } from "../Typography/Typography";

export const PokemonDetails = (props: { pokemonId: number }) => {
  const { pokemonId } = props;
  if (!pokemonId) return <Typography>Select a pokemon</Typography>;
  return <>{pokemonId}</>;
};
