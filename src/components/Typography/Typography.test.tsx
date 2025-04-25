import { screen } from "@testing-library/react";
import { Typography } from "./Typography";
import { renderWithProviders } from "../../tests/testUtils";

test("renders text", () => {
  renderWithProviders(<Typography>hi!</Typography>);
  screen.getByText(/hi!/i);
});
