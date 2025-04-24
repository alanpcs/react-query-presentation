import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Typography } from "../components/Typography/Typography";

export const Route = createFileRoute("/intro")({
  component: Intro,
});

function Intro() {
  const states = [
    "👤 Usuário",
    "🖥️ plataforma",
    "🖱️ Interação",
    "🔄 Mudança de estado",
    "⚛️ Feedback",
  ];
  return (
    <CenteredTemplate header="Aplicações web">
      <Typography variant="body" element="p">
        {states.join("→")}
      </Typography>
      <img
        src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*0OosM_BVC9dNILDoyvUGAg.gif"
        alt="Simpson's kid using computer"
      />
    </CenteredTemplate>
  );
}
