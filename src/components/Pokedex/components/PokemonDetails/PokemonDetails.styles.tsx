import styled from "styled-components";

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
      border: 0.125rem solid white;
    }
    div:first-child {
      border: 0.25rem solid white;
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
      text-shadow: -1px 1px 0 white;
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

export const StyledScreen = styled.div<{ $hasData: boolean }>`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 calc(100% - 50px));
  transition: background-color 0.5s ease;
  background-color: ${(p) => (p.$hasData ? "white" : "black")};
  height: 200px;
  aspect-ratio: 10/6;
  margin: 0 auto;
  color: white;

  box-shadow: 0 0 2px 2px #666 inset;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    height: 75%;
  }
  position: relative;
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
    color: white;
    text-transform: capitalize;
    box-shadow: -1px 1px 0 0 black;
  }
`;
