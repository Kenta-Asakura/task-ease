import { render, renderHook, screen } from "@testing-library/react";
import CreateTaskForm from "./CreateTaskForm";

describe('CreateTaskForm', () => {
  test('renders form elements correctly', () => {
    render(<CreateTaskForm />);

    // Check if input fields are rendered
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });

  // test('resets the form fields after submission', () => {
  //   const setTasks = vi.fn();
  //   const setShowForm = vi.fn();

  //   render(<CreateTaskForm setTasks={setTasks} setShowForm={setShowForm} />);

  //   // Fill out the form
  //   fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "New Task" } });
  //   fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Task Description" } });
  // });

  // test("does not submit when title or description is empty", () => {
  // });
});
