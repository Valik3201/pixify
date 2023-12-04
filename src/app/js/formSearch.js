import { searchForm, resetPage } from "./variables.js";

import {
  getSearchQuery,
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
} from "./searchService.js";

/**
 * Handle the submission of the search form.
 *
 * @param {Event} event - The form submission event.
 */
const handleSearchFormSubmit = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Reset the pagination page and clear the gallery before performing a new search
  resetPage();
  clearGallery();

  // Get the trimmed search query from the input field
  const searchQuery = getSearchQuery();

  // If the search query is not empty, perform Pixabay image search and render the results
  if (searchQuery !== "") {
    // Perform Pixabay image search and get the total number of hits
    const totalHits = await searchAndRenderPixabayImages(searchQuery);

    // Update the UI with information about the search results
    updateResultsInfo(searchQuery, totalHits);
  }
};

// Add an event listener to the search form for form submission handling
searchForm.addEventListener("submit", handleSearchFormSubmit);
