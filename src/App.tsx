import React, { useEffect, useState } from "react";

// components
import SubmitButton from "./components/SubmitButton";
import UrlInput from "./components/UrlInput";
import SearchInput from "./components/SearchInput";

// utlils
import UrlShortener from "./utils/url-shortener";
import { APP_STORAGE_KEY } from "./utils/app-const";
import { UrlList } from "./components/UrlList";

// styles
import "./App.scss";

function App() {
  const shortener = new UrlShortener();
  const [savedUrls, setSavedUrls] = useState<any>([]);
  const [searchedUrls, setSearchedUrls] = useState<any>([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  // handle set urls to local state
  useEffect(() => {
    const existingURLs = getSavedUrlsFromLocalStorage();
    setSavedUrls(existingURLs);
  }, []);

  // handle url search
  useEffect(() => {
    if (searchInputValue) {
      const searchText = searchInputValue?.toLocaleLowerCase().trim();
      const mutatedSearchList = savedUrls?.filter(
        (url: any) =>
          url?.shortUrl?.toLocaleLowerCase()?.includes(searchText) ||
          url?.userUrl?.toLocaleLowerCase()?.includes(searchText)
      );
      setSearchedUrls(mutatedSearchList);
    }

    if (!searchInputValue) setSearchedUrls([]);
  }, [searchInputValue, savedUrls]);

  const saveUrlToLocalStore = (urlData: {
    shortUrl: string;
    userUrl: string;
    id: string;
  }) => {
    const existingURLs = getSavedUrlsFromLocalStorage();

    const upatedURLs = [...existingURLs, urlData];

    updateUrlsStorage(upatedURLs);
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

  const updateUrlsStorage = (upatedURLs: any) => {
    setSavedUrls(upatedURLs);
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(upatedURLs));
  };

  const handleDeleteUrl = (urlData: any) => {
    const existingURLs = getSavedUrlsFromLocalStorage();

    const upatedURLs = existingURLs.filter(
      (url: any) => !(url?.shortUrl === urlData?.shortUrl)
    );

    updateUrlsStorage(upatedURLs);
  };

  const getSavedUrlsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(APP_STORAGE_KEY) || "[]");
  };

  const handleSearchTextChange = (e: any) => {
    setSearchInputValue(e?.target?.value);
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

      <SearchInput onChange={handleSearchTextChange} value={searchInputValue} />
      {/* Render List Without Search Data */}
      {!!savedUrls?.length && !searchedUrls?.length && (
        <UrlList.List>
          {savedUrls?.map((savedUrl: any, index: number) => (
            <UrlList.Item
              key={savedUrl?.id}
              itemData={savedUrl}
              onDelete={handleDeleteUrl}
            />
          ))}
        </UrlList.List>
      )}

      {/* Render List With Search Data */}
      {!!searchedUrls?.length && (
        <UrlList.List>
          {searchedUrls?.map((savedUrl: any, index: number) => (
            <UrlList.Item
              key={savedUrl?.id}
              itemData={savedUrl}
              onDelete={handleDeleteUrl}
            />
          ))}
        </UrlList.List>
      )}
    </div>
  );
}

export default App;
