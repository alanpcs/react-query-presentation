import styled from "styled-components";

export const StyledTemplate = styled.main`
  flex-grow: 1;

  padding: 0 2rem;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  article {
    flex-basis: 50%;
    flex-grow: 1;
    height: 60vh;
    overflow: auto;
    & > img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    }
  }
`;
