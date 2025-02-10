import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("renders task with correct title and description", () => {
  const task = {
    title: "Test Task",
    description: "Test Description",
  };

  render(<Task task={task} />);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});
