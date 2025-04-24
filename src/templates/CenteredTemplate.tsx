import { Typography } from "../components/Typography/Typography";
import { StyledTemplate } from "./CenteredTemplate.styles";

export const CenteredTemplate = ({
  children,
  header,
}: React.PropsWithChildren<{ header?: string }>) => {
  return (
    <StyledTemplate>
      {header && (
        <header>
          <Typography variant="title" element="h1" size="lg">
            {header}
          </Typography>
        </header>
      )}
      {children}
    </StyledTemplate>
  );
};
