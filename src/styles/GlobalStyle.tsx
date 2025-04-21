import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset-css";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${normalizeCss}
  html {
    font-size: 16px;
  }
  body, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fontFamily.body};
    padding: 0 1rem;
  }
`;
