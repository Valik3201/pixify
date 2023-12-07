/**
 * DOM element representing the search list in the banner.
 * @type {HTMLElement}
 */
export const searchList = document.querySelector(".banner__search-list");

/**
 * DOM element representing the search form.
 * @type {HTMLFormElement}
 */
export const searchForm = document.getElementById("search-form");

/**
 * DOM element representing the search input in the banner.
 * @type {HTMLInputElement}
 */
export const searchInput = document.querySelector(".banner__search-input");

/**
 * DOM element representing the container for the image gallery.
 * @type {HTMLElement}
 */
export const galleryContainer = document.getElementById("gallery-container");

/**
 * DOM element representing the load more button in the gallery.
 * @type {HTMLButtonElement}
 */
export const loadMoreButton = document.querySelector(".gallery__load-more-btn");

/**
 * DOM element representing the text displaying search results.
 * @type {HTMLElement}
 */
export const resultsText = document.querySelector(".gallery__results-text");

/**
 * DOM element representing the total hits in the gallery.
 * @type {HTMLElement}
 */
export const totalHitsElement = document.querySelector(".gallery__total-hits");

/**
 * Current page number for pagination.
 * @type {number}
 */
export let page = 1;

/**
 * Number of items to display per page.
 * @type {number}
 */
export let perPage = 15;

/**
 * Increment the current page number for pagination.
 */
export function incrementPage() {
  page += 1;
}

/**
 * Reset the current page number to 1.
 */
export function resetPage() {
  page = 1;
}
