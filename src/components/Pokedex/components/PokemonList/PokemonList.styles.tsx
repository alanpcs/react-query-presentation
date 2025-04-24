import styled from "styled-components";

export const StyledPokemonList = styled.div`
  flex-grow: 1;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 1rem;
  max-height: 500px;
  overflow: auto;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  & > img {
    height: 100px;
    border-radius: 100px;
  }

  & > button {
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
  }
`;
