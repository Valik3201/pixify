import {
  searchForm,
  searchInput,
  loadMoreButton,
  resetPage,
} from "./variables.js";

import {
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
} from "./searchService.js";

const getSearchQuery = () => {
  return searchInput.value.trim();
};

const handleSearchFormSubmit = async (event) => {
  event.preventDefault();
  resetPage();
  clearGallery();

  const searchQuery = getSearchQuery();
  if (searchQuery !== "") {
    const totalHits = await searchAndRenderPixabayImages(searchQuery);

    updateResultsInfo(searchQuery, totalHits);
  }
};

const handleLoadMoreButtonClick = async () => {
  const searchQuery = getSearchQuery();
  if (searchQuery !== "") {
    await searchAndRenderPixabayImages(searchQuery);
  }
};

searchForm.addEventListener("submit", handleSearchFormSubmit);
loadMoreButton.addEventListener("click", handleLoadMoreButtonClick);
