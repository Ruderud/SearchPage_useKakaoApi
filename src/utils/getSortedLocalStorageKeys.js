export const getSortedLocalStorageKeys = () => {
  const currentLocalStorageKeyLength = window.localStorage.length;
  let unsortedLocalStorageArray = [];

  for (let i = 0; i < currentLocalStorageKeyLength; i++) {
    unsortedLocalStorageArray.push(window.localStorage.key(i));
  }

  let sortedLocalStorageArray = unsortedLocalStorageArray.sort(
    (cur, arr) => cur - arr
  );

  return sortedLocalStorageArray;
};
