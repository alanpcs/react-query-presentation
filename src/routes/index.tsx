import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { ViteExample } from "../components/ViteExample/ViteExample";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <CenteredTemplate>
      <ViteExample />
    </CenteredTemplate>
  );
}
