import { searchList, searchInput, resetPage } from "./variables.js";

import {
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
} from "./searchService.js";

const handleSearchListItemClick = async (event) => {
  resetPage();
  clearGallery();

  const clickedListItem = event.target.closest(".banner__search-item");

  if (clickedListItem) {
    const selectedQuery = clickedListItem.textContent.trim();

    searchInput.value = selectedQuery;

    clearGallery();

    const totalHits = await searchAndRenderPixabayImages(selectedQuery);

    updateResultsInfo(selectedQuery, totalHits);
  }
};

searchList.addEventListener("click", handleSearchListItemClick);
