import { getSortedLocalStorageKeys } from "../utils/getSortedLocalStorageKeys.js";

export default function SearchLog() {
  const SearchLogContainerTag = document.querySelector(".SearchLog__Container");

  const sortedLocalStorageKeysArray = getSortedLocalStorageKeys();

  let SearchLogListTags = "<ol>";
  if (sortedLocalStorageKeysArray == false) {
    SearchLogListTags += `<li>저장된 검색 내역이 없습니다.</li>`;
  }
  if (sortedLocalStorageKeysArray) {
    SearchLogListTags += "<div><b>검색내역</b></div>";
    sortedLocalStorageKeysArray.map((key, idx) => {
      const localStorageValue = window.localStorage.getItem(key);
      SearchLogListTags += `<li> ${localStorageValue}</li>`;
    });
  }
  SearchLogListTags += "</ol>";

  SearchLogContainerTag.innerHTML = SearchLogListTags;
}
