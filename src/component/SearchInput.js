import SuggestionList from "./SuggestionList.js";
import SearchLog from "./SearchLog.js";

import { getSearchList } from "../api/getSearchList.js";
import { handleArrowKey } from "../utils/handleArrowKey.js";
import { setGlobalSearchResultArrayValue } from "../utils/globalValue.js";
import { handleSaveSearchLog } from "../utils/handleSaveSearchLog.js";

const SearchInputTag = document.querySelector(".SearchInput");

let SearchDebouncing;

const handleSearchInputEvt = async (evt) => {
  const keyType = evt.key;
  if (evt.isComposing) return;

  if (keyType === "Enter") {
    evt.preventDefault();
    handleSaveSearchLog();
    SearchLog();
    return;
  }

  if (keyType === "ArrowUp" || keyType === "ArrowDown") {
    evt.preventDefault();
    handleArrowKey(keyType);
    return;
  }

  if (SearchDebouncing) {
    clearTimeout(SearchDebouncing);
  }

  SearchDebouncing = setTimeout(async () => {
    if (!evt.target.value) return;

    const res = await getSearchList(evt.target.value);
    setGlobalSearchResultArrayValue(res.documents);
    SuggestionList(res.documents);
  }, 1000);
};

export default function SearchInput() {
  SearchInputTag.addEventListener("keydown", handleSearchInputEvt);
}
