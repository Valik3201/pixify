import { searchPixabayImages, renderPixabayImages } from "./pixabay.js";

import {
  searchForm,
  searchInput,
  galleryContainer,
  resultsText,
  totalHitsElement,
  loadMoreButton,
  perPage,
  page,
  incrementPage,
  resetPage,
} from "./variables.js";

import { clearGallery } from "./searchService.js";

const getSearchQuery = () => {
  return searchInput.value.trim();
};

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  resetPage();

  clearGallery();

  const searchQuery = getSearchQuery();

  if (searchQuery !== "") {
    try {
      const { totalHits, hits } = await searchPixabayImages(
        searchQuery,
        page,
        perPage
      );

      resultsText.insertAdjacentHTML(
        "beforeend",
        `Showing results for <span class="gallery__search-query">${searchQuery}</span>`
      );

      totalHitsElement.insertAdjacentHTML(
        "beforeend",
        `<i class="fa-solid fa-images"></i>Images <span class="gallery__total-hits__count">${totalHits.toLocaleString()}</span>`
      );

      renderPixabayImages(hits, galleryContainer);

      loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

      if (hits.length < perPage) {
        loadMoreButton.style.display = "none";
        alert("We're sorry, but you've reached the end of search results.");
      }

      incrementPage();
    } catch (error) {
      console.error(error);
    }
  }
});

loadMoreButton.addEventListener("click", async () => {
  const searchQuery = getSearchQuery();
  if (searchQuery !== "") {
    try {
      const { totalHits, hits } = await searchPixabayImages(
        searchQuery,
        page,
        perPage
      );

      renderPixabayImages(hits, galleryContainer);

      loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

      if (hits.length < perPage) {
        loadMoreButton.style.display = "none";
        alert("We're sorry, but you've reached the end of search results.");
      }

      incrementPage();
    } catch (error) {
      console.error(error);
    }
  }
});
