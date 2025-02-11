import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("renders task with dynamic title and description", () => {
  const task = {
    title: "Dynamic Task Title",
    description: "Dynamic Task Description"
  };

  render(<Task title={task.title} description={task.description} />);

  expect(screen.getByText(task.title)).toBeInTheDocument();
  expect(screen.getByText(task.description)).toBeInTheDocument();
});
