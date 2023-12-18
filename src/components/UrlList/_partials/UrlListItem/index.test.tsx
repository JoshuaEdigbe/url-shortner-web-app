import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UrlListItem from ".";

describe("UrlListItem component", () => {
  const mockItemData = {
    shortUrl: "http://short.est/abcd1234",
    userUrl: "http://example.com",
    id: "1",
  };

  it("renders without crashing", () => {
    render(<UrlListItem itemData={mockItemData} onDelete={() => {}} />);
  });

  it("displays short and user URLs correctly", () => {
    const { getByText } = render(
      <UrlListItem itemData={mockItemData} onDelete={() => {}} />
    );

    const shortUrlText = getByText(mockItemData.shortUrl);
    const userUrlText = getByText(mockItemData.userUrl);

    expect(shortUrlText).toBeInTheDocument();
    expect(userUrlText).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(
      <UrlListItem itemData={mockItemData} onDelete={onDeleteMock} />
    );

    const deleteButton = getByText("delete");
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledWith(mockItemData);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <UrlListItem itemData={mockItemData} onDelete={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
