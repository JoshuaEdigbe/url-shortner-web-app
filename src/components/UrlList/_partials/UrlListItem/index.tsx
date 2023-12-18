import React from "react";

interface Props {
  itemData: {
    shortUrl: string;
    userUrl: string;
    id: string;
  };
}

const UrlListItem: React.FC<Props> = ({ itemData }) => {
  return (
    <li key={itemData?.id}>
      <div className="urls-container">
        <span className="short-url-text">{itemData.shortUrl}</span>
        <span className="old-url-text">{itemData.userUrl}</span>
      </div>
      <button className="delete-btn">delete</button>
    </li>
  );
};

export default UrlListItem;
