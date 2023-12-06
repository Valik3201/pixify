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
 * Flag indicating whether data is currently being loaded.
 *
 * @type {boolean}
 * @description
 *    - When true, it indicates that data is currently being loaded.
 *    - When false, it indicates that there is no ongoing data loading.
 */
let isLoading = false;

/**
 * Function to search Pixabay images based on a query and render the results.
 *
 * @async
 * @function
 * @param {string} query - The search query for Pixabay images.
 * @param {string} [loadMethod="button"] - The method used to load more images ("button" or "scroll").
 * @returns {Promise<number>} - The total number of hits (matching images).
 */
export const searchAndRenderPixabayImages = async (
  query,
  loadMethod = "button"
) => {
  try {
    // Set the selected query for reference.
    selectedQuery = query;

    // Display loading dots while fetching data.
    Loading.dots();
    isLoading = true;

    // Fetch Pixabay images based on the query, page, and perPage parameters.
    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    // Render Pixabay images in the specified gallery container.
    renderPixabayImages(hits, galleryContainer);

    // Display messages based on search results.
    if (hits.length === 0) {
      Notify.info(
        "Sorry, there are no images matching your search query. Please try again."
      );
    } else if (hits.length < perPage && page !== 1) {
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    // Handle loading more images based on the specified method.
    if (loadMethod === "button") {
      // Show or hide the load more button based on the number of hits.
      loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

      // Increment the page for the next search.
      incrementPage();
    } else if (loadMethod === "scroll" && hits.length < totalHits) {
      // Calculate the total number of pages based on total hits and perPage.
      const totalPages = Math.ceil(totalHits / perPage);

      // Define a scroll handler to load more images when scrolling to the bottom.
      const scrollHandler = async () => {
        const isBottom =
          window.innerHeight + window.scrollY + 500 >=
          document.body.offsetHeight;

        if (isBottom) {
          if (page + 1 <= totalPages) {
            // Increment the page and perform a new search for scrolling.
            incrementPage();
            await searchAndRenderPixabayImages(query, "scroll");
          }

          // Remove the scroll event listener after loading more images.
          window.removeEventListener("scroll", scrollHandler);
        }
      };

      // Add the scroll event listener to trigger the scrollHandler.
      window.addEventListener("scroll", scrollHandler);

      // Display a message if the user has reached the end of search results.
      if (page === totalPages) {
        Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
    }

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
    // Remove loading indicators and set isLoading to false.
    Loading.remove();
    isLoading = false;
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
