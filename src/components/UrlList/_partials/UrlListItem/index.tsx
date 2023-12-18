import React from "react";

interface Props {
  itemData: {
    shortUrl: string;
    userUrl: string;
    id: string;
  };
  onDelete: (itemData: any) => void;
}

const UrlListItem: React.FC<Props> = ({ itemData, onDelete }) => {
  const handleDelete = () => {
    onDelete(itemData);
  };
  return (
    <li key={itemData?.id}>
      <div className="urls-container">
        <span className="short-url-text">{itemData.shortUrl}</span>
        <span className="old-url-text">{itemData.userUrl}</span>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        delete
      </button>
    </li>
  );
};

export default UrlListItem;
