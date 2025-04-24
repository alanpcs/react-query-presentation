import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeProvider";
import { useMatchRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: React.PropsWithChildren) => {
  const matchRoute = useMatchRoute();
  const isAtDemo1 = !!matchRoute({ to: "/tanstack-query" });
  const isAtDemo2 = !!matchRoute({ to: "/pokedex-demo" });
  const shouldShowDevTools = isAtDemo1 || isAtDemo2;

  return (
    <QueryClientProvider client={queryClient}>
      {shouldShowDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
      <TanStackRouterDevtools />
    </QueryClientProvider>
  );
};
