import React from "react";
import { render } from "@testing-library/react";
import UrlList from "./UrlList";

describe("UrlList component", () => {
  it("renders without crashing", () => {
    render(<UrlList>Test children</UrlList>);
  });

  it("renders children correctly", () => {
    const { getByText } = render(<UrlList>Test children</UrlList>);
    const childrenElement = getByText("Test children");

    expect(childrenElement).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<UrlList>Test children</UrlList>);
    expect(container).toMatchSnapshot();
  });
});
