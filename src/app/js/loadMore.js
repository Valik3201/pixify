import { searchAndRenderPixabayImages } from "./searchService";

import { loadMoreButton } from "./variables.js";

export const handleLoadMoreButtonClick = async () => {
  loadMoreButton.addEventListener("click", async () => {
    const searchQuery = document
      .querySelector(".banner__search-input")
      .value.trim();
    if (searchQuery !== "") {
      await searchAndRenderPixabayImages(searchQuery);
    }
  });
};
