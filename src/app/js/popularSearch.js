import { searchList, searchInput, resetPage } from "./variables.js";

import {
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
} from "./searchService.js";

/**
 * Handle the click event on a search list item.
 *
 * @param {Event} event - The click event on the search list.
 */
const handleSearchListItemClick = async (event) => {
  // Reset the pagination page and clear the gallery before performing a new search
  resetPage();
  clearGallery();

  // Find the closest ancestor with the class "banner__search-item" to the clicked element
  const clickedListItem = event.target.closest(".banner__search-item");

  // If a search list item is clicked, extract and trim the selected query
  if (clickedListItem) {
    const selectedQuery = clickedListItem.textContent.trim();

    // Set the selected query as the value of the search input
    searchInput.value = selectedQuery;

    // Perform Pixabay image search and get the total number of hits
    const totalHits = await searchAndRenderPixabayImages(selectedQuery);

    // Update the UI with information about the search results
    updateResultsInfo(selectedQuery, totalHits);
  }
};

// Add an event listener to the search list for handling item clicks
searchList.addEventListener("click", handleSearchListItemClick);
