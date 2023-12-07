import { render, screen } from "@testing-library/react";

import { StatIndicator } from ".";

describe("<StatIndicator />", () => {
  it("should render the created tasks stat indicator", () => {
    render(<StatIndicator variation="created" statistic={10} />);
    const statIndicator = screen.getByText(/Created tasks/i);
    expect(statIndicator).toBeInTheDocument();
  });
  it("should render the finished tasks stat indicator", () => {
    render(<StatIndicator variation="finished" statistic={10} />);
    const statIndicator = screen.getByText(/finished/i);
    expect(statIndicator).toBeInTheDocument();
  });
  it("should render the number passed in the statistic prop", () => {
    render(<StatIndicator variation="finished" statistic={10} />);
    const statistic = screen.getByText(/10/i);
    expect(statistic).toBeInTheDocument();
  });
});
