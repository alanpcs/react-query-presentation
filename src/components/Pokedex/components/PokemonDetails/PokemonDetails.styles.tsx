import styled, { css, keyframes } from "styled-components";

export const StyledPokedex = styled.main`
  background: #d20a41;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 1rem 0 0 1rem;
  border: 2px solid black;

  header {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 1rem;
    div {
      border: 0.125rem solid ${(p) => p.theme.palette.white};
    }
    div:first-child {
      border: 0.25rem solid ${(p) => p.theme.palette.white};
    }
    border-bottom: 2px solid black;
  }
  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > p {
      text-transform: capitalize;
      text-shadow: -1px 1px 0 ${(p) => p.theme.palette.white};
    }
    & > div > img {
      padding: 0.25rem;
    }
  }
`;

const getColor = (props: { $color: "red" | "green" | "yellow" | "blue" }) => {
  if (props.$color === "red") return "#B91322";
  if (props.$color === "yellow") return "#DCD967";
  if (props.$color === "green") return "#7AD43C";
  return "#19e5f1";
};

export const StyledLed = styled.div<{ $size?: "lg"; $color: "red" | "green" | "yellow" | "blue" }>`
  border-radius: 50%;
  aspect-ratio: 1;
  height: ${(p) => (p.$size === "lg" ? "3rem" : "1rem")};
  background-color: ${getColor};
`;

const offScreenAnimation = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
`;
const screenNoise = css`
  &::before {
    content: "";
    height: 200vh;
    aspect-ratio: 1;
    position: absolute;
    background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
    background-repeat: repeat;
    animation: ${offScreenAnimation} 0.5s infinite;
    opacity: 0.9;
    visibility: visible;
  }
`;

export const StyledScreen = styled.div<{ $hasData: boolean }>`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px));
  transition: background-color 0.5s ease;
  background-color: ${(p) => (p.$hasData ? p.theme.palette.white : "#111")};

  height: 200px;
  aspect-ratio: 10/6;
  margin: 0 auto;
  color: ${(p) => p.theme.palette.white};

  box-shadow: 0 0 2px 2px #666 inset;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > img:not(:last-child) {
    position: absolute;
    left: 0;
    top: 0;
  }
  & > img:last-child {
    height: 75%;
  }
  position: relative;

  ${screenNoise};
  &::after {
    content: "";
    position: absolute;
    width: 66px;
    aspect-ratio: 1;
    bottom: 0;
    left: 0;
    transform: rotateZ(45deg) translateY(45px);
    box-shadow: 0 0 2px 2px #666;
    z-index: 1;
  }
`;

export const StyledInfo = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  p {
    border-radius: 8px;
    padding: 0.75rem 0.25rem;
    background: #333;
    color: ${(p) => p.theme.palette.white};
    text-transform: capitalize;
    box-shadow: -1px 1px 0 0 black;
  }
`;
