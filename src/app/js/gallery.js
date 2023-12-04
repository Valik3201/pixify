import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = new SimpleLightbox(".gallery__container a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 200,
  fadeSpeed: 300,
});
