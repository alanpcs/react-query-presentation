import { vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../tests/testUtils";
import { Filters } from "./Filters";

describe("Filters", () => {
  const onSelectSpy = vitest.fn();
  const defaultRender = () => {
    return renderWithProviders(<Filters onSelectFilter={onSelectSpy} />);
  };
  it("should render filters", () => {
    const container = defaultRender();
    container.getAllByRole("button");
  });

  it("should call callback prop when a filter is clicked", async () => {
    const container = defaultRender();
    const button = container.getByRole("img", { name: "ice type" });
    await userEvent.click(button);
    expect(onSelectSpy).toHaveBeenCalledWith("ice");
  });
});
