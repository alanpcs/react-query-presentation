import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Intro } from "../slides/Intro/Intro";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <CenteredTemplate>
      <Intro />
    </CenteredTemplate>
  );
}
