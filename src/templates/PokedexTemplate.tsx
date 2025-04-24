import { StyledTemplate } from "./PokedexTemplate.styles";

export const PokedexTemplate = ({ children, header }: Record<string, React.ReactNode>) => {
  return (
    <StyledTemplate>
      {header && <header>{header}</header>}
      {children}
    </StyledTemplate>
  );
};
