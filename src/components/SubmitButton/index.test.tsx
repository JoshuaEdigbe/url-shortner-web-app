import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SubmitButton from ".";

describe("SubmitButton component", () => {
  it("renders Shorten URL button when showShortenUrlButton is true", () => {
    const { getByText } = render(
      <SubmitButton
        showShortenUrlButton={true}
        handleShortenUrl={() => {}}
        handleShowOriginalUrl={() => {}}
      />
    );

    const button = getByText("Shorten URL");
    expect(button).toBeInTheDocument();
  });

  it("renders Show Original URL button when showShortenUrlButton is false", () => {
    const { getByText } = render(
      <SubmitButton
        showShortenUrlButton={false}
        handleShortenUrl={() => {}}
        handleShowOriginalUrl={() => {}}
      />
    );

    const button = getByText("Show Original URL");
    expect(button).toBeInTheDocument();
  });

  it("calls handleShortenUrl when Shorten URL button is clicked", () => {
    const handleShortenUrlMock = jest.fn();
    const { getByText } = render(
      <SubmitButton
        showShortenUrlButton={true}
        handleShortenUrl={handleShortenUrlMock}
        handleShowOriginalUrl={() => {}}
      />
    );

    const button = getByText("Shorten URL");
    fireEvent.click(button);

    expect(handleShortenUrlMock).toHaveBeenCalled();
  });

  it("calls handleShowOriginalUrl when Show Original URL button is clicked", () => {
    const handleShowOriginalUrlMock = jest.fn();
    const { getByText } = render(
      <SubmitButton
        showShortenUrlButton={false}
        handleShortenUrl={() => {}}
        handleShowOriginalUrl={handleShowOriginalUrlMock}
      />
    );

    const button = getByText("Show Original URL");
    fireEvent.click(button);

    expect(handleShowOriginalUrlMock).toHaveBeenCalled();
  });
});