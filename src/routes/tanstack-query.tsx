import { createFileRoute } from "@tanstack/react-router";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { TwoColumnsTemplate } from "../templates/TwoColumnsTemplate";
import { PokemonDetails } from "../components/PokemonDetails/PokemonDetails";
import { useState } from "react";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/tanstack-query")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);
  return (
    <TwoColumnsTemplate
      left={<PokemonList onSelectPokemon={setSelectedPokemonId} />}
      header={
        <Typography variant="title" element="h1" size="lg">
          Pokédex
        </Typography>
      }
      right={<PokemonDetails pokemonId={selectedPokemonId} />}
    />
  );
}
