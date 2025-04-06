import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

describe("Task component", () => {
  test("renders task with dynamic title and description", () => {
    const task = {
      heading: "Dynamic Task Title",
      description: "Dynamic Task Description",
    };

    render(<Task heading={task.heading} description={task.description} />);

    expect(screen.getByText(task.heading)).toBeInTheDocument();
    expect(screen.getByText(task.description)).toBeInTheDocument();
  });
});
