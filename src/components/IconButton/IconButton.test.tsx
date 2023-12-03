import { render, screen } from "@testing-library/react";

import { IconButton } from ".";

describe("<IconButton />", () => {
  it("Should render the an accessible icon button", () => {
    render(<IconButton />);
    const button = screen.getByRole("button", { name: /delete task/i });
    expect(button).toBeInTheDocument();
  });
});
