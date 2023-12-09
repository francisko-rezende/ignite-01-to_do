import { render, screen, within } from "@testing-library/react";

import { ToDo } from ".";
import { renderWithUser } from "../../utils/tests";

describe("<ToDo />", () => {
  it("should render an empty list at first", () => {
    render(<ToDo />);
    const noItemsText = screen.getByText(/you have no registered tasks/i);
    expect(noItemsText).toBeInTheDocument();
  });

  it("should not add new tasks if the add task field has no content", async () => {
    const { user } = renderWithUser(<ToDo />);
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    const noItemsText = screen.getByText(/you have no registered tasks/i);
    expect(noItemsText).toBeInTheDocument();
  });

  it("should add a new task to the list after submitting the task", async () => {
    const { user } = renderWithUser(<ToDo />);
    const textInput = screen.getByRole("textbox", { name: /add a new task/i });
    await user.click(textInput);
    await user.type(textInput, "my new task");
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    const task = screen.getByRole("listitem");
    const taskText = within(task).getByText("my new task");
    expect(taskText).toBeInTheDocument();
  });

  it("should render new tasks unchecked/not done", async () => {
    const { user } = renderWithUser(<ToDo />);
    const textInput = screen.getByRole("textbox", { name: /add a new task/i });
    await user.click(textInput);
    await user.type(textInput, "my new task");
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    const checkbox = screen.getByRole("checkbox", { checked: false });
    expect(checkbox).toBeInTheDocument();
  });

  it("should mark the task as done after clicking its checkbox", async () => {
    const { user } = renderWithUser(<ToDo />);
    const textInput = screen.getByRole("textbox", { name: /add a new task/i });
    await user.click(textInput);
    await user.type(textInput, "my new task");
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    const checkbox = screen.getByRole("checkbox", { checked: false });
    await user.click(checkbox);
    const checkedCheckbox = screen.getByRole("checkbox", { checked: true });
    expect(checkedCheckbox).toBeInTheDocument();
  });

  it("should remove the task after clicking the delete task button", async () => {
    const { user } = renderWithUser(<ToDo />);
    const textInput = screen.getByRole("textbox", { name: /add a new task/i });
    await user.click(textInput);
    await user.type(textInput, "my new task");
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    const deleteButton = screen.getByRole("button", {
      name: /delete the task "my new task"/i,
    });
    await user.click(deleteButton);
    const taskText = screen.queryByText(/my new task/i);
    expect(taskText).toBeNull();

    const noItemsText = screen.getByText(/you have no registered tasks/i);
    expect(noItemsText).toBeInTheDocument();
  });

  it("should remove just the associated task after clicking the delete task button", async () => {
    const { user } = renderWithUser(<ToDo />);
    const textInput = screen.getByRole("textbox", { name: /add a new task/i });
    await user.click(textInput);
    await user.type(textInput, "first task");
    const submitButton = screen.getByRole("button", { name: /create/i });
    await user.click(submitButton);
    await user.type(textInput, "second task");
    await user.click(submitButton);
    const tasks = screen.getAllByRole("listitem");
    expect(tasks).toHaveLength(2);
    const deleteFirstTaskButton = screen.getByRole("button", {
      name: 'delete the task "first task"',
    });
    await user.click(deleteFirstTaskButton);
    const tasksAfterDeletion = screen.getAllByRole("listitem");
    expect(tasksAfterDeletion).toHaveLength(1);
    const firstTaskAfterDeletion = screen.queryByText(/firstTask/i);
    const secondTaskAfterDeletion = screen.getByRole("listitem");
    const secondTaskText = within(secondTaskAfterDeletion).getByText(
      "second task",
    );
    expect(firstTaskAfterDeletion).toBeNull();
    expect(secondTaskText).toBeInTheDocument();
  });
});
