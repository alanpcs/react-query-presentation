import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TwoColumnsTemplate } from "../templates/TwoColumnsTemplate";
import { Typography } from "../components/Typography/Typography";
import { useMouseClick } from "../hooks/useMouseClick";

import appStatesImg from "../assets/images/appStates.png";
import routeStatesImg from "../assets/images/routeStates.png";
import browserStatesImg from "../assets/images/browserStates.png";
import formStatesImg from "../assets/images/formStates.png";
import serverStatesImg from "../assets/images/serverStates.png";
import styled from "styled-components";

export const Route = createFileRoute("/frontend-states")({
  component: RouteComponent,
});

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-direction: row;
  justify-content: center;
  img {
    height: 2rem;
    width: auto;
  }
`;

const contents = [
  {
    left: (
      <Typography variant="title" element="h2">
        {" "}
        😄 Estados de aplicação{" "}
      </Typography>
    ),
    right: <img src={appStatesImg} alt="useState" />,
  },
  {
    left: (
      <Typography variant="title" element="h2">
        🙂 Estados de rota
      </Typography>
    ),
    right: <img src={routeStatesImg} alt="routeState" />,
  },
  {
    left: (
      <Typography variant="title" element="h2">
        😐 Estados do navegador
      </Typography>
    ),
    right: <img src={browserStatesImg} alt="browserState" />,
  },
  {
    left: (
      <Typography variant="title" element="h2">
        🥺 Estados de formulário
      </Typography>
    ),
    right: <img src={formStatesImg} alt="formState" />,
  },
  {
    left: (
      <StyledHeader>
        <img
          src="https://emojis.slackmojis.com/emojis/images/1643512754/51021/thisisfine.gif?1643512754"
          alt="this is fine gif"
        />
        <Typography variant="title" element="h2">
          Estados de servidor
        </Typography>
      </StyledHeader>
    ),
    right: <img src={serverStatesImg} alt="serverState" />,
  },
];

const withBlankRightFrames = contents.flatMap((content) => [
  { left: content.left, right: <></> },
  { ...content },
]);

function RouteComponent() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const { left, right } = withBlankRightFrames[currentFrame];

  const handleNextFrame = () => {
    if (currentFrame === withBlankRightFrames.length - 1) return;
    setCurrentFrame((prevFrame) => (prevFrame + 1) % withBlankRightFrames.length);
  };
  const handlePreviousFrame = () => {
    if (currentFrame === 0) return;
    setCurrentFrame(
      (prevFrame) => (prevFrame - 1 + withBlankRightFrames.length) % withBlankRightFrames.length,
    );
  };
  useMouseClick("left", handleNextFrame);
  useMouseClick("right", handlePreviousFrame);

  return (
    <TwoColumnsTemplate
      header={
        <Typography variant="title" element="h1" size="lg">
          Estados de frontend
        </Typography>
      }
      left={left}
      right={right}
    />
  );
}
