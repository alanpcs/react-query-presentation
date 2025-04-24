import styled from "styled-components";

export const StyledCaught = styled.img`
  height: 24px;
  aspect-ratio: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
`;

export const StyledPokemon = styled.button`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
