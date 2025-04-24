import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";

export const Route = createFileRoute("/questions")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CenteredTemplate header="Perguntas?" />;
}
