import { searchForm, resetPage } from "./variables.js";

import {
  getSearchQuery,
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
} from "./searchService.js";

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

searchForm.addEventListener("submit", handleSearchFormSubmit);
