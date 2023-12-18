import React, { useEffect, useState } from "react";

// components
import SubmitButton from "./components/SubmitButton";
import UrlInput from "./components/UrlInput";

// utlils
import UrlShortener from "./utils/url-shortener";
import { APP_STORAGE_KEY } from "./utils/app-const";

// styles
import './App.scss'

function App() {
  const shortener = new UrlShortener();
  const [savedUrls, setSavedUrls] = useState<any>([]);

  useEffect(() => {
    const existingURLs = JSON.parse(
      localStorage.getItem(APP_STORAGE_KEY) || "[]"
    );

    setSavedUrls(existingURLs);
  }, []);

  const saveUrlToLocalStore = (urlData: {
    shortUrl: string;
    userUrl: string;
    id: string;
  }) => {
    const existingURLs = JSON.parse(
      localStorage.getItem(APP_STORAGE_KEY) || "[]"
    );

    const upatedURLs = [...existingURLs, urlData];
    setSavedUrls(upatedURLs);

    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(upatedURLs));
  };

  const handleShortenUrl = (userInput: string) => {
    if (userInput) {
      const shortUrl = shortener.shortenUrl(userInput);

      // save shortened url
      saveUrlToLocalStore({
        userUrl: userInput,
        shortUrl: shortUrl,
        id: shortener.generateShortCode(),
      });
    }
  };

  const handleShowOriginalUrl = (userInput: string) => {
    const foundUrl = savedUrls.filter(
      (savedUrl: any) => savedUrl?.shortUrl === userInput
    )[0];

    alert(foundUrl?.userUrl || `Sorry, we can't find the original URL :)`);
  };

  return (
    <div id="app">
      <UrlInput
        renderButton={(showShortenUrlButton, userInput, handleResetForm) => (
          <SubmitButton
            showShortenUrlButton={showShortenUrlButton}
            handleShortenUrl={() => {
              handleShortenUrl(userInput);
              handleResetForm();
            }}
            handleShowOriginalUrl={() => handleShowOriginalUrl(userInput)}
          />
        )}
      />
      <ul>
        {savedUrls?.map((savedUrl: any, index: number) => (
          <li key={savedUrl?.id}>
            {savedUrl.userUrl} {savedUrl?.shortUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
