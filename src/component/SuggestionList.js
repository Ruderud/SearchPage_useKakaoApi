import SearchResult from "../component/SearchResult.js";

import { setGlobalSelectedResultValue } from "../utils/globalValue.js";
import { injectSuggestionListClickEvt } from "../utils/handleSuggestionListClickEvt.js";

const SuggestionContainerTag = document.querySelector(".Suggestion__Container");

export default function SuggestionList(searchResultsArray) {
  let SuggestionListTags = "<ul>";

  searchResultsArray.map((element, idx) => {
    const { title, contents, url } = element;
    const untagedTitle = title.replace(/<b>|<\/b>/g, "");
    if (idx === 0) {
      setGlobalSelectedResultValue({
        ...element,
        nowIndex: idx,
        maxIndex: searchResultsArray.length - 1,
      });
      SuggestionListTags += `<li id="${idx}" title="${untagedTitle}" class="Selected"><div class="Suggestion__title">${title}</div><div class="Suggestion__elementContents">${contents}</div><a href="${url}" class="MoveLink">이동하기</a></li>`;
      return;
    }
    SuggestionListTags += `<li id="${idx}" title="${untagedTitle}"><div class="Suggestion__title">${title}</div><div class="Suggestion__elementContents">${contents}</div><a href="${url}" class="MoveLink">이동하기</a></li>`;
  });

  SuggestionListTags += "</ul>";

  SuggestionContainerTag.innerHTML = SuggestionListTags;

  injectSuggestionListClickEvt();
  SearchResult();
}
