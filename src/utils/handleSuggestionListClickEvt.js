export const injectSuggestionListClickEvt = () => {
  const SuggestionListTags = document.querySelectorAll(
    ".Suggestion__Container li"
  );

  SuggestionListTags.forEach((SuggestionListTag) => {
    SuggestionListTag.addEventListener("click", handleSuggestionListClickEvt);
  });
};

const handleSuggestionListClickEvt = (evt) => {};
