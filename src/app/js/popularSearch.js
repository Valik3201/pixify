// Importing variables from the "variables.js" module
import { searchList, searchInput, resetPage } from "./variables.js";

// Importing functions from the "searchService.js" module
import {
  updateResultsInfo,
  searchAndRenderPixabayImages,
  clearGallery,
  getSearchQuery,
} from "./searchService.js";

// Creating a new IntersectionObserver instance for lazy loading images
export const intersectionObserver = new IntersectionObserver(
  /**
   * Handles the intersection changes for lazy loading images.
   *
   * @param {IntersectionObserverEntry[]} entries - An array of intersection entries.
   */
  async (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Retrieve the search query and trigger Pixabay image search
        const selectedQuery = getSearchQuery();
        searchAndRenderPixabayImages(selectedQuery);
      }
    });
  },
  { threshold: 0.5 } // Adjust the threshold as needed
);

/**
 * Handles the click event on a search list item.
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

    // Add the footer element as the target for intersection observation
    const targetElement = document.querySelector("footer.footer");

    // Start observing the footer element for intersection changes
    intersectionObserver.observe(targetElement);
  }
};

// Add an event listener to the search list for handling item clicks
searchList.addEventListener("click", handleSearchListItemClick);
