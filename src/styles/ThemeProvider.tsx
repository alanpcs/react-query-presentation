import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./theme";

export const ThemeProvider = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>{props.children}</StyledComponentsThemeProvider>
  );
};
