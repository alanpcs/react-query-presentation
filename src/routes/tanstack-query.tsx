import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "../components/Typography/Typography";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import styled from "styled-components";
import { usePokemonList } from "../services/queries/usePokemonList";

export const Route = createFileRoute("/tanstack-query")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = usePokemonList();

  return (
    <CenteredTemplate header="Tanstack / Query">
      <Typography>isLoading: {isLoading ? "true" : "false"}</Typography>
      <Typography>error: {error?.message || "none"}</Typography>
      <StyledList>
        {data?.map((pokemon, i) => (
          <p key={pokemon.name}>
            <a href={pokemon.url}>
              #{i + 1} {pokemon.name}
            </a>
          </p>
        ))}
      </StyledList>
    </CenteredTemplate>
  );
}

const StyledList = styled.div`
  p {
    padding: 0.5rem;
  }
`;
