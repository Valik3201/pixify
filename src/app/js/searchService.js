import { searchPixabayImages, renderPixabayImages } from "./pixabay.js";

import {
  galleryContainer,
  resultsText,
  totalHitsElement,
  loadMoreButton,
  perPage,
  page,
  incrementPage,
} from "./variables.js";

export const updateResultsInfo = (query, totalHits) => {
  resultsText.insertAdjacentHTML(
    "beforeend",
    `Showing results for <span class="gallery__search-query">${query}</span>`
  );

  totalHitsElement.insertAdjacentHTML(
    "beforeend",
    `<i class="fa-solid fa-images"></i>Images <span class="gallery__total-hits__count">${totalHits.toLocaleString()}</span>`
  );
};

export const searchAndRenderPixabayImages = async (query) => {
  try {
    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    renderPixabayImages(hits, galleryContainer);

    loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

    incrementPage();

    if (hits.length < perPage) {
      loadMoreButton.style.display = "none";
      alert("We're sorry, but you've reached the end of search results.");
    }
    return totalHits;
  } catch (error) {
    console.error("Error fetching Pixabay data:", error);
    return 0;
  }
};

export const clearGallery = () => {
  galleryContainer.innerHTML = "";
  resultsText.innerHTML = "";
  totalHitsElement.innerHTML = "";
};
