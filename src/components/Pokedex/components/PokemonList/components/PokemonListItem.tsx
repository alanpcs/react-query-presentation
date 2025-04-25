import { useCatchPokemon } from "../../../../../services/mutations/useCatchPokemon";
import { useReleasePokemon } from "../../../../../services/mutations/useReleasePokemon";
import { useCaughtPokemon } from "../../../../../services/queries/useCaughtPokemon";
import { Typography } from "../../../../Typography/Typography";
import { StyledCaught, StyledPokemon } from "./PokemonlistItem.styles";

type PokemonListItemProps = {
  name: string;
  url: string;
  onSelectPokemon: (id: number) => void;
};
export const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, url, onSelectPokemon } = props;
  const idFromUrl = Number(url.split("pokemon/")[1].replace("/", "") || "1");
  const { data: caughtPokemon } = useCaughtPokemon();
  const isCaught = caughtPokemon?.some((caught) => caught.url === url) || false;
  const catchPokemonMutation = useCatchPokemon();
  const releasePokemonMutation = useReleasePokemon();
  const handleMarkPokemon = () => {
    if (isCaught) {
      releasePokemonMutation.mutate(url);
      onSelectPokemon(0);
      return;
    }
    catchPokemonMutation.mutate({ name, url });
  };

  return (
    <StyledPokemon
      onClick={() => {
        onSelectPokemon(idFromUrl);
      }}
      onDoubleClick={() => handleMarkPokemon()}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromUrl}.png`}
        alt={`${name} sprite`}
      />
      {isCaught && (
        <StyledCaught
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="pokemon marked as caught"
        />
      )}
      <Typography variant="poke">
        #{String(idFromUrl).padStart(3, "0")} {name}
      </Typography>
    </StyledPokemon>
  );
};
