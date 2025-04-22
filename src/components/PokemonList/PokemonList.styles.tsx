import styled from "styled-components";

export const StyledPokemonList = styled.div`
  flex-grow: 1;
  padding: 0.5rem;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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
    -webkit-backdrop-filter: blur(2px);
    transition: all 0.3s ease;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

export const StyledLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    height: 100px;
  }
`;
