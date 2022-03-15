import { getSortedLocalStorageKeys } from "./getSortedLocalStorageKeys.js";

export const handleSaveSearchLog = () => {
  const { title } = window.selectedValue;
  const currentLocalStorageKeyLength = window.localStorage.length;
  const untagedTitle = title.replace(/<b>|<\/b>/g, "");

  let isAlreadySaved = false;
  const sortedLocalStorageKeysArray = getSortedLocalStorageKeys();
  sortedLocalStorageKeysArray.map((key) => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue === untagedTitle) {
      isAlreadySaved = true;
    }
  });

  if (currentLocalStorageKeyLength < 5 && !isAlreadySaved) {
    window.localStorage.setItem(Date.now(), untagedTitle);
  }
  if (currentLocalStorageKeyLength >= 5 && !isAlreadySaved) {
    window.localStorage.removeItem(sortedLocalStorageKeysArray[0]);
    window.localStorage.setItem(Date.now(), untagedTitle);
  }
};
