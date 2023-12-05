/**
 * Represents the button element to scroll to the top of the page.
 * @type {HTMLElement}
 */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

/**
 * Displays or hides the scroll-to-top button based on the scroll position.
 * @function
 * @returns {void}
 */
const showScrollButton = () => {
  scrollToTopBtn.style.display =
    document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
      ? "block"
      : "none";
};

/**
 * Scrolls the window to the top of the page with a smooth behavior.
 * @function
 * @returns {void}
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Event handler for the window scroll event.
 * Calls the showScrollButton function to update the button visibility.
 * @event
 * @returns {void}
 */
window.onscroll = () => {
  showScrollButton();
};

/**
 * Adds a click event listener to the scrollToTopBtn element.
 * Scrolls to the top of the page when the button is clicked.
 * @event
 * @returns {void}
 */
scrollToTopBtn.addEventListener("click", () => {
  scrollToTop();
});
