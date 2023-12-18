import React from "react";

import "./index.scss";

interface Props {
  onChange: any;
  value: string;
}

const SearchInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div>
      <input type="text" onChange={onChange} id="search-input" value={value} placeholder="Search..." />
    </div>
  );
};

export default SearchInput;
