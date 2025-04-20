import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";

export const AppProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
