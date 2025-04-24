import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/demo-time")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CenteredTemplate>
      <Typography variant="title" element="h1" size="lg">
        Hora da demo!
      </Typography>
    </CenteredTemplate>
  );
}
