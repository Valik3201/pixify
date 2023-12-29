// Importing functions from the "pixabay.js" module
import { searchPixabayImages, renderPixabayImages } from "./pixabay.js";

// Importing variables and constants from the "variables.js" module
import {
  searchInput,
  galleryContainer,
  resultsText,
  totalHitsElement,
  loadMoreButton,
  perPage,
  page,
  incrementPage,
} from "./variables.js";

// Importing the intersectionObserver from the "popularSearch.js" module
import { intersectionObserver } from "./popularSearch.js";

// Importing Notiflix Notify and Loading modules for notifications and loading indicators
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";

// Initializing Notiflix Notify with custom settings
Notify.init({
  fontSize: "1rem",
  width: "550px",
  cssAnimationStyle: "from-bottom",
  useIcon: false,
  success: {
    background: "#17d0c6",
  },
  info: {
    background: "#336aea",
  },
});

// Initializing Notiflix Loading with custom settings
Loading.init({
  svgColor: "#336aea",
});

/**
 * Retrieve the search query from the input field.
 *
 * @returns {string} - The trimmed search query.
 */
export const getSearchQuery = () => {
  return searchInput.value.trim();
};

/**
 * Update the UI with information about the search results.
 *
 * @param {string} query - The search query.
 * @param {number} totalHits - The total number of hits.
 */
export const updateResultsInfo = (query, totalHits) => {
  if (totalHits !== 0) {
    Notify.success(`Hooray! We found ${totalHits} images.`);
  }

  resultsText.insertAdjacentHTML(
    "beforeend",
    `Showing results for <span class="gallery__search-query">${query}</span>`
  );

  totalHitsElement.insertAdjacentHTML(
    "beforeend",
    `<i class="fa-solid fa-images"></i>Images <span class="gallery__total-hits__count">${totalHits.toLocaleString()}</span>`
  );
};

/**
 * Search and render Pixabay images based on the provided query.
 *
 * @param {string} query - The search query.
 * @returns {Promise<number>} - The total number of hits.
 */
export const searchAndRenderPixabayImages = async (query, typeSearch) => {
  try {
    // Display loading dots while fetching data.
    Loading.dots();

    // Fetch Pixabay images based on the query, page, and perPage parameters.
    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    // Render Pixabay images in the specified gallery container.
    renderPixabayImages(hits, galleryContainer);

    // Display messages based on search results.
    if (hits.length === 0) {
      intersectionObserver.disconnect();
      Notify.info(
        "Sorry, there are no images matching your search query. Please try again."
      );
    } else if (hits.length < perPage && page !== 1) {
      intersectionObserver.disconnect();
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    if (typeSearch === "form") {
      // Show or hide the load more button based on the number of hits.
      loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";
    } else {
      loadMoreButton.style.display = "none";
    }

    // Increment the page for the next search.
    incrementPage();

    // Return the total number of hits.
    return totalHits;
  } catch (error) {
    // Handle errors during Pixabay data fetching.
    console.error("Error fetching Pixabay data:", error);
    Notify.failure(
      "Error fetching Pixabay data: " + (error.message || "Unknown error")
    );

    // Return 0 when an error occurs.
    return 0;
  } finally {
    // Remove loading indicators
    Loading.remove();
  }
};

/**
 * Clear the contents of the gallery, results text, and total hits elements.
 */
export const clearGallery = () => {
  galleryContainer.innerHTML = "";
  resultsText.innerHTML = "";
  totalHitsElement.innerHTML = "";
};
