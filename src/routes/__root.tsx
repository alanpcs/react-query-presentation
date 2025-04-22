import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppProviders } from "../AppProviders";
import { Navigation } from "../components/Navigation/Navigation";

export const Route = createRootRoute({
  component: () => (
    <AppProviders>
      <Navigation />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </AppProviders>
  ),
});
