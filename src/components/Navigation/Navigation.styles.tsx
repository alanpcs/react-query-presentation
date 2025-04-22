import styled, { css } from "styled-components";

export const StyledLinks = styled.nav<{ $extended: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  gap: 1rem;
  position: fixed;
  margin-left: 50%;
  transform: translateX(-50%) scale(1);
  transform-origin: left;
  height: 1rem;
  width: auto;

  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  transition:
    height 0.3s ease,
    width 0.3s ease,
    transform 0.3s ease,
    color 0.3s ease,
    opacity 0.3s ease;

  ${(p) =>
    !p.$extended &&
    css`
      transform-origin: left;
      transform: scale(75%) translateX(-50%);

      & a:not(:first-child):not(:last-child) {
        &::after {
          width: 0;
        }
        &::before {
          content: "!";
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          box-shadow: none;
          transition: box-shadow 0.3s ease;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }
        &.active::before {
          box-shadow: 0 0 0 1px rgba(100, 100, 100, 1);
        }
        &:hover::before {
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
        }
      }
    `}
`;
