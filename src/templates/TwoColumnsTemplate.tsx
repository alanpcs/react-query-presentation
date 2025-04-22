import { StyledTemplate } from "./TwoColumnsTemplate.styles";

export const TwoColumnsTemplate = ({ left, right, header }: Record<string, React.ReactNode>) => {
  return (
    <>
      {header && <header>{header}</header>}
      <StyledTemplate>
        <article>{left}</article>
        <article>{right}</article>
      </StyledTemplate>
    </>
  );
};
