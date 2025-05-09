import styled, { keyframes } from "styled-components";
import { useViewportWidth } from "../hooks/useViewportWidth";
import { StyledTemplate } from "./PokedexTemplate.styles";

export const PokedexTemplate = ({ children, header }: Record<string, React.ReactNode>) => {
  const [_, width, height] = useViewportWidth();
  const isPortraitMode = height >= width;
  return (
    <StyledTemplate>
      {isPortraitMode && <StyledTurnToLandscape>📱</StyledTurnToLandscape>}
      {!isPortraitMode && (
        <>
          {header && <header>{header}</header>}
          {children}
        </>
      )}
    </StyledTemplate>
  );
};

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  30% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
`;

const StyledTurnToLandscape = styled.div`
  animation: ${rotate} 3s ease-in-out infinite;
  transform: rotateZ(90deg);
  margin: auto;
  font-size: 40px;
`;
