import { useCaughtPokemon } from "../../../../services/queries/useCaughtPokemon";
import { usePokemonDetails } from "../../../../services/queries/usePokemonDetails";
import { PokeLoading } from "../../../PokeLoading/PokeLoading";
import { Typography } from "../../../Typography/Typography";
import { ElementImage } from "../PokemonType/PokemonType";
import { StyledInfo, StyledLed, StyledPokedex, StyledScreen } from "./PokemonDetails.styles";

export const PokemonDetails = (props: { pokemonId: number }) => {
  const { pokemonId } = props;
  const { data, isLoading } = usePokemonDetails(pokemonId);
  const { data: caughtPokemon } = useCaughtPokemon();
  const isCaught = caughtPokemon?.some((caught) => caught.url === data?.url) || false;
  console.log(">>>", isCaught, data?.url);

  return (
    <StyledPokedex>
      <header>
        <StyledLed $color="blue" $size="lg" />
        <StyledLed $color="red" />
        <StyledLed $color="yellow" />
        <StyledLed $color="green" />
      </header>
      <section>
        <StyledScreen $hasData={!!data}>
          {isCaught && (
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="pokemon marked as caught"
            />
          )}
          {!data && !isLoading && <Typography variant="poke">Select a pokemon</Typography>}
          {!data && isLoading && <PokeLoading />}
          {data && (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`}
              alt={`${data.name} sprite`}
            />
          )}
        </StyledScreen>
        <Typography element="p" variant="poke" size="lg">
          {data?.name}
        </Typography>
        <div>
          {data?.types.map((type) => <ElementImage name={type.type.name} key={type.type.name} />)}
        </div>
        <StyledInfo>
          {data?.moves?.slice(0, 4).map((move) => (
            <Typography element="p" variant="poke" size="sm" key={move.move.name}>
              {move.move.name}
            </Typography>
          ))}
        </StyledInfo>
      </section>
    </StyledPokedex>
  );
};
