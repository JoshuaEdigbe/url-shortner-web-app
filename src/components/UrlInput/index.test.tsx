import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UrlInput from ".";

describe("UrlInput component", () => {
  it("renders without crashing", () => {
    render(<UrlInput />);
  });

  it("updates input value correctly", () => {
    const { getByPlaceholderText } = render(<UrlInput />);
    const input = getByPlaceholderText("Enter URL");

    fireEvent.change(input, { target: { value: "https://example.com" } });

    // @ts-ignore
    expect(input.value).toBe("https://example.com");
  });

  it("calls renderButton with correct arguments", () => {
    const renderButtonMock = jest.fn();
    const { getByPlaceholderText } = render(
      <UrlInput renderButton={renderButtonMock} />
    );

    const input = getByPlaceholderText("Enter URL");
    fireEvent.change(input, { target: { value: "https://example.com" } });

    expect(renderButtonMock).toHaveBeenCalledWith(
      true,
      "https://example.com",
      expect.any(Function)
    );
  });
});