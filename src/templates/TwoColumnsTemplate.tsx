import { StyledTemplate } from "./TwoColumnsTemplate.styles";

export const TwoColumnsTemplate = ({
  left,
  right,
  header,
  footer,
}: Record<string, React.ReactNode>) => {
  return (
    <>
      {header && <header>{header}</header>}
      <StyledTemplate>
        <article>{left}</article>
        <article>{right}</article>
      </StyledTemplate>
      {footer && <footer>{footer}</footer>}
    </>
  );
};
