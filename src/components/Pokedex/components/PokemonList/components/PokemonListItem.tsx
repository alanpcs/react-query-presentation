import { Typography } from "../../../../Typography/Typography";

type PokemonListItemProps = {
  name: string;
  url: string;
  onSelectPokemon: (id: number) => void;
};
export const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, url, onSelectPokemon } = props;
  const idFromUrl = Number(url.split("pokemon/")[1].replace("/", "") || "1");
  return (
    <button onClick={() => onSelectPokemon(idFromUrl)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromUrl}.png`}
        alt={`${name} sprite`}
      />
      <Typography variant="poke">
        #{String(idFromUrl).padStart(3, "0")} {name}
      </Typography>
    </button>
  );
};
