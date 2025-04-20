import styled from "styled-components";

export const StyledLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  gap: 1rem;
  position: fixed;
  margin-left: 50%;
  transform: translateX(-50%);

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.28);
`;
