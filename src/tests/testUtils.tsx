import { render } from "@testing-library/react";
import { ThemeProvider } from "../styles/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const renderWithProviders = (children: React.ReactNode): ReturnType<typeof render> => {
  return render(
    <QueryClientProvider client={testQueryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>,
  );
};
