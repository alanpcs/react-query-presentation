import { Typography } from "../../Typography/Typography";

type PokemonListItemProps = {
  name: string;
  url: string;
  index: number;
  onSelectPokemon: (id: number) => void;
};
export const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, index, onSelectPokemon } = props;
  return (
    <button onClick={() => onSelectPokemon(index + 1)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${index + 1}.png`}
        alt={`${name} sprite`}
      />
      <Typography>
        #{String(index + 1).padStart(3, "0")} {name}
      </Typography>
    </button>
  );
};
