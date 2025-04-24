import { createFileRoute } from "@tanstack/react-router";
import { PokedexTemplate } from "../templates/PokedexTemplate";
import { Pokedex } from "../components/Pokedex/Pokedex";

export const Route = createFileRoute("/pokedex-demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PokedexTemplate>
      <Pokedex />
    </PokedexTemplate>
  );
}
