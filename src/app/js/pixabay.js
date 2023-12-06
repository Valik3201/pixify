import axios from "axios";
import { gallery } from "./gallery.js";

/**
 * Pixabay API key for authentication.
 * @type {string}
 */
const API_KEY = "41006597-e52c63fe5093395ccafd50f48";

/**
 * Pixabay API URL for image search.
 * @type {string}
 */
const API_URL = "https://pixabay.com/api/";

/**
 * Fetch Pixabay images based on the provided query, page, and items per page.
 *
 * @param {string} query - The search query for images.
 * @param {number} page - The page number for pagination.
 * @param {number} perPage - The number of items to fetch per page.
 * @returns {Promise<{hits: Array, totalHits: number}>} - Object containing the image hits and total hits.
 */
export const searchPixabayImages = async (query, page, perPage) => {
  try {
    // Constructing the parameters for the Pixabay API request
    const params = {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: perPage,
    };

    // Logging the current page for debugging purposes
    console.log("Current page:", page);

    // Logging the constructed URL for debugging purposes
    console.log("Search URL:", `${API_URL}?${new URLSearchParams(params)}`);

    // Making the Pixabay API request using Axios
    const response = await axios.get(API_URL, {
      params: params,
    });

    // Extracting relevant data from the API response
    return {
      hits: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    // Handling errors and logging them
    console.error("Error fetching Pixabay data:", error);
    return { hits: [], totalHits: 0 };
  }
};

/**
 * Render Pixabay images in the specified container using the provided hits data.
 *
 * @param {Array} hits - Array of Pixabay image data.
 * @param {HTMLElement} container - The container element to render the images into.
 */
export const renderPixabayImages = (hits, container) => {
  // Generating HTML markup for each image in the hits array
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="gallery__item flex">
          <a class="gallery__link" href="${largeImageURL}">
            <img data-src="${webformatURL}" alt="${tags}" class="gallery__image lazyload" />
            <div class="gallery__info flex flex-jc-sb">
              <p class="gallery__stat"><i class="fas fa-heart" aria-label="Likes"></i>${likes.toLocaleString()}</p>
              <p class="gallery__stat"><i class="fas fa-comment" aria-label="Comments"></i>${comments.toLocaleString()}</p>
              <p class="gallery__stat"><i class="fas fa-eye" aria-label="Views"></i>${views.toLocaleString()}</p>
              <p class="gallery__stat"><i class="fas fa-download" aria-label="Downloads"></i>${downloads.toLocaleString()}</p>          
            </div>
          </a>
        </div>`;
      }
    )
    .join("");

  // Inserting the generated HTML markup into the specified container
  container.insertAdjacentHTML("beforeend", markup);

  // Refreshing the SimpleLightbox instance after adding new images
  gallery.refresh();
};
