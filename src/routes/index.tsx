import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <CenteredTemplate>
      <Typography element="h1" variant="title" size="lg">
        Mudando a forma de pensar sobre Server State
      </Typography>
      <Typography element="h2" variant="title" size="md">
        Com React Query
      </Typography>
    </CenteredTemplate>
  );
}
