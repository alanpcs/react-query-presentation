import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";
import { themedRender } from "../../tests/testUtils";

test("renders text", () => {
  themedRender(<Typography>hi!</Typography>);
  expect(screen.getByText(/hi!/i)).toBeInTheDocument();
});
