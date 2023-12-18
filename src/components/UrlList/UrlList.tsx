import React from "react";

// styles
import './index.scss'

interface Props {
  children: React.ReactNode;
}

const UrlList: React.FC<Props> = ({ children }) => {
  return <ul id="url-list-container">{children}</ul>;
};

export default UrlList;
