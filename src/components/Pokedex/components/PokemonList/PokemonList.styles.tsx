import styled from "styled-components";

export const StyledPokemonList = styled.div`
  flex-grow: 1;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
  grid-template-rows: repeat(auto-fit, minmax(150px, max-content));
  padding: 1rem;
  max-height: 500px;
  overflow: auto;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
