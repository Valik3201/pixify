import { searchPixabayImages, renderPixabayImages } from "./pixabay.js";

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
 * Perform Pixabay image search and render the results.
 *
 * @param {string} query - The search query.
 * @returns {Promise<number>} - The total number of hits.
 */
export const searchAndRenderPixabayImages = async (query) => {
  try {
    // Display loading dots during the search
    Loading.dots();

    // Fetch Pixabay images based on the search query, page, and items per page
    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    // Render the Pixabay images in the gallery container
    renderPixabayImages(hits, galleryContainer);

    // Display the "Load More" button if there are more results to show
    loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

    // Increment the page number for pagination
    incrementPage();

    // Display notifications based on the search results
    if (hits.length === 0) {
      Notify.info(
        "Sorry, there are no images matching your search query. Please try again."
      );
    } else if (hits.length < perPage && page !== 1) {
      loadMoreButton.style.display = "none";
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    // Remove the loading indicator
    Loading.remove();

    // Scroll to the next set of search results for a smoother user experience
    if (galleryContainer && galleryContainer.firstElementChild) {
      const { height: cardHeight } =
        galleryContainer.firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight,
        behavior: "smooth",
      });
    } else {
      console.warn("Gallery container is not found or is empty.");
    }

    return totalHits;
  } catch (error) {
    // Handle errors during Pixabay data fetching
    console.error("Error fetching Pixabay data:", error);
    Notify.failure(
      "Error fetching Pixabay data: " + (error.message || "Unknown error")
    );
    Loading.remove();
    return 0;
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
