import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset-css";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${normalizeCss}
  html {
    font-size: 16px;
    scrollbar-color: #374151 transparent;
  }
  #root {
    /* padding: 0 1rem; */
    display: flex;
    flex-direction: column;
  }
  body, #root {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.body};

    &>header{
      padding-top: 4rem;
    }
    &>footer {
      padding: 0.5rem;
    }
    &>header, &>footer{
      text-align: center;
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

    &:not([aria-disabled="true"]):hover::after, &:not([aria-disabled="true"]).active::after {
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
