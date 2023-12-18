import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from ".";

describe("SearchInput component", () => {
  const mockOnChange = jest.fn();

  it("renders without crashing", () => {
    render(<SearchInput onChange={mockOnChange} value="" />);
  });

  it("displays the correct initial value", () => {
    const { getByDisplayValue } = render(
      <SearchInput onChange={mockOnChange} value="initialValue" />
    );

    const inputElement = getByDisplayValue("initialValue");

    expect(inputElement).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <SearchInput onChange={mockOnChange} value="" />
    );
    expect(container).toMatchSnapshot();
  });
});
