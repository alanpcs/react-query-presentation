import { ThemeProvider } from "./styles/ThemeProvider";

export const AppProviders = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
