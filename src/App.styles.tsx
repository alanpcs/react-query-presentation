import { styled } from "styled-components";
import { media } from "./styles/media-query";

export const StyledApp = styled.main`
  max-width: 1280px;
  margin: auto;
  padding: 2rem;
  text-align: center;

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
  border: 10px solid black;
  ${media.tablet.down} {
    border-color: gray;
  }
  ${media.tablet.only} {
    border-color: pink;
  }
  ${media.tablet.up} {
    border-color: ${({ theme }) => theme.palette.black};
  }
  img:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  a:last-of-type:hover > img {
    filter: drop-shadow(0 0 2em blue);
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
