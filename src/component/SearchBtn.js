import { getSearchList } from "../api/getSearchList.js";

const SearchBtnTag = document.querySelector(".SearchBtn");

const handleSearchBtnEvt = async (evt) => {
  evt.preventDefault();
  const SearchInputTag = document.querySelector(".SearchInput");
  const res = await getSearchList(SearchInputTag.value);
};

export default function SearchBtn() {
  SearchBtnTag.addEventListener("click", handleSearchBtnEvt);
}
