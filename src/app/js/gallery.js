/**
 * LazySizes library for lazy loading images.
 * @see {@link https://github.com/aFarkas/lazysizes}
 */
import "lazysizes";

/**
 * LazySizes plugin for detecting changes in attributes.
 * @see {@link https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange}
 */
import "lazysizes/plugins/attrchange/ls.attrchange";

/**
 * SimpleLightbox for displaying images in a lightbox.
 * @see {@link https://simplelightbox.com/}
 */
import SimpleLightbox from "simplelightbox";

/**
 * CSS styles for SimpleLightbox.
 */
import "simplelightbox/dist/simple-lightbox.min.css";

/**
 * The SimpleLightbox instance for the gallery container.
 * @type {SimpleLightbox}
 */
export const gallery = new SimpleLightbox(".gallery__container a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 200,
  fadeSpeed: 300,
});
