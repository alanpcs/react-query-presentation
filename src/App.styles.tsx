import { createGlobalStyle, styled } from "styled-components";

export const StyledApp = styled.main`
  max-width: 1280px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  /* min-height: 100vh; */

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  img {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  img:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  a:last-of-type:hover > img {
    filter: drop-shadow(0 0 2em red);
    @media (prefers-reduced-motion: no-preference) {
      animation: logo-spin infinite 20s linear;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledCard = styled.div`
  padding: 2em;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #646cff;
  color: white;
  transition: background-color 300ms;

  &:hover {
    background-color: #535bf2;
  }
`;

export const StyledText = styled.p`
  color: #888;
`;

// below shold be the global styles later on

export const GlobalStyles = createGlobalStyle`
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
    &:hover {
      color: #535bf2;
    }
  }
  body, #root {
    margin: 0;
    min-height: 100vh;

  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.2;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    &:hover {
      border-color: #646cff;
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

`;
