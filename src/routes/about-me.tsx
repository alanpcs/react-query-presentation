import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/about-me")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CenteredTemplate>
      <Typography variant="title" element="h1" size="lg">
        Alan Peterson C. Silva
      </Typography>
      <hr />
      <Typography variant="title" element="h2" size="md">
        Bacharel em Ciência da Computação - UFPR
      </Typography>
      <Typography variant="title" element="h3" size="md">
        Engenheiro de Software Fullstack desde 2010 🦕
      </Typography>
      <hr />
      <Typography variant="title" element="h3" size="sm">
        Usando Tanstack Query (aka react-query) em produção desde 2019
      </Typography>
    </CenteredTemplate>
  );
}
