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
      <div>
        <span>{itemData.shortUrl}</span>
        <span>{itemData.userUrl}</span>
      </div>
      <button>delete</button>
    </li>
  );
};

export default UrlListItem;
