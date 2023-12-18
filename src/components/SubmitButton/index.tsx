import React from "react";

// styles
import "./index.scss";

interface Props {
  showShortenUrlButton: boolean;
  handleShortenUrl: () => void;
  handleShowOriginalUrl: () => void;
}
const SubmitButton: React.FC<Props> = ({
  showShortenUrlButton,
  handleShortenUrl,
  handleShowOriginalUrl,
}) => {
  return (
    <>
      {showShortenUrlButton && (
        <button onClick={handleShortenUrl} className="submit-button">
          Shorten URL
        </button>
      )}

      {!showShortenUrlButton && (
        <button onClick={handleShowOriginalUrl} className="submit-button">
          Show Original URL
        </button>
      )}
    </>
  );
};

export default SubmitButton;
