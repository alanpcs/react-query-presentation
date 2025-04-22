import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset-css";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${normalizeCss}
  html {
    font-size: 16px;
  }
  #root {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
  }
  body, #root {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.body};

    &>header{
      text-align: center;
      padding-top: 4rem;
    }
  }

  a {
    width: auto;
    color: inherit;
    text-decoration: none;
    position: relative;
    transition:
      color 0.2s ease,
      height 0.3s ease,
      width 0.3s ease;

    &:first-child,
    &:last-child {
    }
    &::before {
      color: transparent;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 1px;
      background-color: currentColor;
      transition: width 0.3s ease;
    }

    &[aria-disabled="true"] {
      opacity: 25%;
    }

    &:not([aria-disabled="true"]):hover::after {
      width: 100%;
    }

    &:focus-visible {
      outline: 2px solid #888;
      outline-offset: 2px;
    }
  }
  button {
    background-color: transparent;
    border: 0;
  }

  `;
