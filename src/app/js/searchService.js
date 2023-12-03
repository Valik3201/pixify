import {
  galleryContainer,
  resultsText,
  totalHitsElement,
} from "./variables.js";

export const clearGallery = () => {
  galleryContainer.innerHTML = "";
  resultsText.innerHTML = "";
  totalHitsElement.innerHTML = "";
};
