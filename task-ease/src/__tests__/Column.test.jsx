import { render, screen } from "@testing-library/react";
import Column from "../components/Column";

describe("Column component", () => {
  test("renders with a title", () => {
    const title = "Task Column";
    render(<Column title={title} tasks={[]} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
