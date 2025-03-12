import { render, screen } from "@testing-library/react";
import CreateTaskForm from "../components/CreateTaskForm";
import { describe, expect, test } from "vitest";

describe('CreateTaskForm', () => {
  test('renders form elements correctly', () => {
    render(<CreateTaskForm />)

    // Check if input fields are rendered
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });
});
