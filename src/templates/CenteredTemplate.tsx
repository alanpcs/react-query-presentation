import { StyledTemplate } from "./CenteredTemplate.styles";

export const CenteredTemplate = ({ children }: React.PropsWithChildren) => {
  return <StyledTemplate>{children}</StyledTemplate>;
};
