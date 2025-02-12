import { render, screen } from "@testing-library/react";
import Column from "../components/Column";
import { describe } from "vitest";

describe("Column component", () => {
  test("renders with a title", () => {
    const title = "Task Column";

    render(<Column title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
