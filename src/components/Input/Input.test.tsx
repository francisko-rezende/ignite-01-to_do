import { render, screen } from "@testing-library/react";

import { Input } from ".";

describe("<Input />", () => {
  it("should render the heading", () => {
    render(<Input label="Add a new task" placeholder="Add a new task" />);

    const input = screen.getByLabelText(/add a new task/i);
    expect(input).toBeInTheDocument();
  });
});
