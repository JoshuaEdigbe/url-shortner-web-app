import React from "react";

interface Props {
  children: React.ReactNode;
}

const UrlList: React.FC<Props> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default UrlList;
