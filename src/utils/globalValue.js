export const setGlobalSearchResultArrayValue = (searchResultsArray = []) => {
  window.searchResultsArray = searchResultsArray;
};

export const setGlobalSelectedResultValue = (
  selectedValue = {
    nowIndex: 0,
    maxIndex: 0,
    title: "",
    contents: "",
    url: "",
  }
) => {
  window.selectedValue = selectedValue;
};
