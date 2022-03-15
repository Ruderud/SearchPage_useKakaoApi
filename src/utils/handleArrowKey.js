import SearchResult from "../component/SearchResult.js";

import { setGlobalSelectedResultValue } from "../utils/globalValue.js";

export const handleArrowKey = (movement) => {
  const { nowIndex, maxIndex } = window.selectedValue;
  const currentSelected = document.querySelector(
    ".Suggestion__Container .Selected"
  );
  let nextIndex;
  let nextSelected;

  switch (movement) {
    case "ArrowUp":
      if (nowIndex <= 0) {
        nextIndex = maxIndex;
      }
      if (nowIndex > 0) {
        nextIndex = nowIndex - 1;
      }

      currentSelected.className = "";
      nextSelected = document.querySelector(
        `.Suggestion__Container li:nth-child(${nextIndex + 1})`
      );
      nextSelected.className = "Selected";

      setGlobalSelectedResultValue({
        ...window.searchResultsArray[nextIndex],
        nowIndex: nextIndex,
        maxIndex,
      });
      break;

    case "ArrowDown":
      if (nowIndex >= maxIndex) {
        nextIndex = 0;
      }
      if (nowIndex < maxIndex) {
        nextIndex = nowIndex + 1;
      }

      currentSelected.className = "";
      nextSelected = document.querySelector(
        `.Suggestion__Container li:nth-child(${nextIndex + 1})`
      );
      nextSelected.className = "Selected";

      setGlobalSelectedResultValue({
        ...window.searchResultsArray[nextIndex],
        nowIndex: nextIndex,
        maxIndex,
      });
      break;

    default:
      break;
  }

  SearchResult();
};
