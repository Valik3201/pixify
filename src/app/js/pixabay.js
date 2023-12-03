// pixabay.js

import axios from "axios";

const API_KEY = "41006597-e52c63fe5093395ccafd50f48";
const API_URL = "https://pixabay.com/api/";

export const searchPixabayImages = async (query, page, perPage) => {
  try {
    const params = {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: perPage,
    };

    console.log("Search URL:", `${API_URL}?${new URLSearchParams(params)}`);

    const response = await axios.get(API_URL, {
      params: params,
    });

    return {
      hits: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    console.error("Error fetching Pixabay data:", error);
    return { hits: [], totalHits: 0 };
  }
};

export const renderPixabayImages = (hits, container) => {
  const markup = hits
    .map(({ id, webformatURL, likes, views, comments, downloads }) => {
      return `<div class="gallery__item flex">
          <img src="${webformatURL}" alt="Pixabay Image ${id}" loading="lazy" class="gallery__image" />
          <div class="gallery__info flex flex-jc-sb">
            <p class="gallery__stat"><i class="fas fa-heart" aria-label="Likes"></i>${likes.toLocaleString()}</p>
            <p class="gallery__stat"><i class="fas fa-comment" aria-label="Comments"></i>${comments.toLocaleString()}</p>
            <p class="gallery__stat"><i class="fas fa-eye" aria-label="Views"></i>${views.toLocaleString()}</p>
            <p class="gallery__stat"><i class="fas fa-download" aria-label="Downloads"></i>${downloads.toLocaleString()}</p>          
          </div>
        </div>`;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", markup);

  const { height: cardHeight } =
    container.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: "smooth",
  });
};
