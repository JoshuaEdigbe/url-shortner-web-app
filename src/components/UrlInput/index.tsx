import React, { useEffect, useState } from "react";

// utils
import { SHORTENER_BASE_URL } from "../../utils/app-const";

// style
import './index.scss'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserUrlInputValue(e?.target?.value.trim());
  };

  const handleResetForm = () => {
    setUserUrlInputValue("");
  };

  return (
    <section id="form-container">
      <input
        type="url"
        placeholder="Enter URL"
        name=""
        className="url-input"
        value={userUrlInputValue}
        onChange={handleInputChange}
      />
      {renderButton &&
        renderButton(showShortenUrlButton, userUrlInputValue, handleResetForm)}
    </section>
  );
};

export default UrlInput;
