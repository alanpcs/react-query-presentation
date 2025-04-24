import { render } from "@testing-library/react";
import { ThemeProvider } from "../styles/ThemeProvider";

export const themedRender = (children: React.ReactNode): ReturnType<typeof render> => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
