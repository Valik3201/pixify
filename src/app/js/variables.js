export const searchList = document.querySelector(".banner__search-list");
export const searchForm = document.getElementById("search-form");
export const searchInput = document.querySelector(".banner__search-input");
export const galleryContainer = document.getElementById("gallery-container");
export const loadMoreButton = document.querySelector(".gallery__load-more-btn");
export const resultsText = document.querySelector(".gallery__results-text");
export const totalHitsElement = document.querySelector(".gallery__total-hits");

export let page = 1;
export let perPage = 40;

export function incrementPage() {
  page += 1;
  console.log("Page:", page);
}

export function resetPage() {
  page = 1;
}
