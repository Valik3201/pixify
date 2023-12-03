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

Loading.init({
  svgColor: "#336aea",
});

export const getSearchQuery = () => {
  return searchInput.value.trim();
};

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

export const searchAndRenderPixabayImages = async (query) => {
  try {
    Loading.dots();

    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    renderPixabayImages(hits, galleryContainer);

    loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

    incrementPage();

    if (hits.length === 0) {
      Notify.info(
        "Sorry, there are no images matching your search query. Please try again."
      );
    } else if (hits.length < perPage) {
      loadMoreButton.style.display = "none";
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    Loading.remove();
    return totalHits;
  } catch (error) {
    Notify.failure("Error fetching Pixabay data:", error);
    return 0;
  }
};

export const clearGallery = () => {
  galleryContainer.innerHTML = "";
  resultsText.innerHTML = "";
  totalHitsElement.innerHTML = "";
};
