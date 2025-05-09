import { createFileRoute } from "@tanstack/react-router";
import { CenteredTemplate } from "../templates/CenteredTemplate";
import { Typography } from "../components/Typography/Typography";
import styled from "styled-components";
import { TwoColumnsTemplate } from "../templates/TwoColumnsTemplate";
import { useViewportWidth } from "../hooks/useViewportWidth";

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
  const [wideEnoughForExpanded] = useViewportWidth();
  if (wideEnoughForExpanded) {
    return (
      <CenteredTemplate header="Aplicações web">
        <Typography variant="body" element="p">
          {states.join("→")}
        </Typography>
        <StyledImage
          src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*0OosM_BVC9dNILDoyvUGAg.gif"
          alt="Simpson's kid using computer"
        />
      </CenteredTemplate>
    );
  }
  return (
    <TwoColumnsTemplate
      header="Aplicações web"
      left={
        <Typography variant="body" element="p">
          {states.join("→")}
        </Typography>
      }
      right={
        <StyledImage
          src="https://cdn-images-1.medium.com/v2/resize:fit:1600/1*0OosM_BVC9dNILDoyvUGAg.gif"
          alt="Simpson's kid using computer"
        />
      }
    />
  );
}

const StyledImage = styled.img`
  max-height: 80%;
`;
