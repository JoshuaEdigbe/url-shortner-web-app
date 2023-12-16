import React, { useEffect, useState } from "react";

import { SHORTENER_BASE_URL } from "../../utils/app-const";

interface Props {
  renderButton?: (
    showShortenUrlButton: boolean,
    userUrlInputValue: string,
    handleResetForm: () => void
  ) => React.ReactNode;
}

const UrlInput: React.FC<Props> = ({ renderButton }) => {
  const [userUrlInputValue, setUserUrlInputValue] = useState("");
  const [showShortenUrlButton, setShowShortenUrlButton] = useState(true);

  useEffect(() => {
    if (userUrlInputValue) {
      userUrlInputValue.includes(SHORTENER_BASE_URL)
        ? setShowShortenUrlButton(false)
        : setShowShortenUrlButton(true);
    }
  }, [userUrlInputValue]);

  const handleInputChange = (e: any) => {
    setUserUrlInputValue(e?.target?.value);
  };

  const handleResetForm = () => {
    setUserUrlInputValue("");
  };

  return (
    <section>
      <input
        type="url"
        placeholder="Enter URL"
        name=""
        id=""
        value={userUrlInputValue}
        onChange={handleInputChange}
      />
      {renderButton &&
        renderButton(showShortenUrlButton, userUrlInputValue, handleResetForm)}
    </section>
  );
};

export default UrlInput;
