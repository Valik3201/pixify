import { searchPixabayImages, renderPixabayImages } from "./pixabay.js";

import {
  searchList,
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

let page = 1;

searchList.addEventListener("click", async (event) => {
  // Проверяем, был ли клик на элементе списка

  resetPage();

  const clickedListItem = event.target.closest(".banner__search-item");

  if (clickedListItem) {
    const selectedQuery = clickedListItem.textContent.trim();

    // Устанавливаем выбранное слово в поле ввода
    searchInput.value = selectedQuery;

    clearGallery();

    // Выполняем поиск и отображение результатов
    await performSearch(selectedQuery);
  }
});

const performSearch = async (query) => {
  try {
    const { totalHits, hits } = await searchPixabayImages(query, page, perPage);

    resultsText.insertAdjacentHTML(
      "beforeend",
      `Showing results for <span class="gallery__search-query">${query}</span>`
    );

    totalHitsElement.insertAdjacentHTML(
      "beforeend",
      `<i class="fa-solid fa-images"></i>Images <span class="gallery__total-hits__count">${totalHits.toLocaleString()}</span>`
    );

    renderPixabayImages(hits, galleryContainer);

    loadMoreButton.style.display = hits.length >= perPage ? "block" : "none";

    if (hits.length < perPage && page > 1) {
      loadMoreButton.style.display = "none";
      alert("We're sorry, but you've reached the end of search results.");
    }

    incrementPage();
  } catch (error) {
    console.error("Error fetching Pixabay data:", error);
  }
};
