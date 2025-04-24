import { createFileRoute } from "@tanstack/react-router";
import { PokedexTemplate } from "../templates/PokedexTemplate";
import { Pokedex } from "../components/Pokedex/Pokedex";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/pokedex-demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PokedexTemplate
      header={
        <Typography variant="title" element="h1" size="sm">
          Pokédex
        </Typography>
      }
    >
      <Pokedex />
    </PokedexTemplate>
  );
}
