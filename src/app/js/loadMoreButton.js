import { loadMoreButton } from "./variables.js";

import {
  getSearchQuery,
  searchAndRenderPixabayImages,
} from "./searchService.js";

// Initially hide the "Load More" button
loadMoreButton.style.display = "none";

/**
 * Handle the click event on the "Load More" button.
 */
const handleLoadMoreButtonClick = async () => {
  // Get the trimmed search query from the input field
  const searchQuery = getSearchQuery();

  // If the search query is not empty, perform Pixabay image search and render more results
  if (searchQuery !== "") {
    // Perform Pixabay image search and render additional results
    await searchAndRenderPixabayImages(searchQuery, "form");
  }
};

// Add an event listener to the "Load More" button for handling clicks
loadMoreButton.addEventListener("click", handleLoadMoreButtonClick);
