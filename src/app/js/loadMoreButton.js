import { loadMoreButton } from "./variables.js";

import {
  getSearchQuery,
  searchAndRenderPixabayImages,
} from "./searchService.js";

loadMoreButton.style.display = "none";

const handleLoadMoreButtonClick = async () => {
  const searchQuery = getSearchQuery();

  if (searchQuery !== "") {
    await searchAndRenderPixabayImages(searchQuery);
  }
};

loadMoreButton.addEventListener("click", handleLoadMoreButtonClick);
