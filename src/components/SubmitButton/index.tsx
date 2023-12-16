import React from "react";

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
        <button onClick={handleShortenUrl}>Shorten URL</button>
      )}

      {!showShortenUrlButton && (
        <button onClick={handleShowOriginalUrl}>Show Original URL</button>
      )}
    </>
  );
};

export default SubmitButton;
