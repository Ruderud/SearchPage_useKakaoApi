const SearchResultContainerTag = document.querySelector(
  ".SearchResult__Container"
);

export default function SearchResult() {
  const { title, contents, url } = window.selectedValue;
  const untagedTitle = title.replace(/<b>|<\/b>/g, "");

  const SearchResultTag = `
        <h3 class="SearchResult__Title">${untagedTitle}</h3>
        <a href="${url}" class="MoveLink">검색결과 페이지로 이동하기</a>
        <p class="SearchResult__Contents">${contents}</p>
    `;

  SearchResultContainerTag.innerHTML = SearchResultTag;
}
