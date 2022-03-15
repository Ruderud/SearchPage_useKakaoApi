import { getSortedLocalStorageKeys } from "../utils/getSortedLocalStorageKeys.js";

export default function SearchLog() {
  const SearchLogContainerTag = document.querySelector(".SearchLog__Container");

  const sortedLocalStorageKeysArray = getSortedLocalStorageKeys();

  let SearchLogListTags = "<ol>";
  if (sortedLocalStorageKeysArray) {
    SearchLogListTags += "<div><b>검색내역</b></div>";
    sortedLocalStorageKeysArray.map((key) => {
      const localStorageValue = window.localStorage.getItem(key);
      SearchLogListTags += `<li> ${localStorageValue}</li>`;
    });
  }
  if (sortedLocalStorageKeysArray == false) {
    SearchLogListTags += `<div>저장된 검색 내역이 없습니다.</div>`;
  }
  SearchLogListTags += "</ol>";

  SearchLogContainerTag.innerHTML = SearchLogListTags;
}
