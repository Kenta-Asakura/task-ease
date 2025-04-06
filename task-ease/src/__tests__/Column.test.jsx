import { render, screen } from "@testing-library/react";
import Column from "../components/Column";

describe("Column component", () => {
  test("renders with a title", () => {
    const title = "Task Column";
    const tasks = [];

    render(<Column title={title} tasks={tasks} />);
    expect(screen.getByText(`${title} (${tasks.length})`)).toBeInTheDocument();
  });
});
