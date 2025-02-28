import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset-css";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${normalizeCss}
  body, #root {
    min-height: 100vh;
  }
`;
