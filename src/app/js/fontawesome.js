/**
 * Font Awesome SVG icon library.
 * @type {Object}
 */
import { library, dom } from "@fortawesome/fontawesome-svg-core";

/**
 * Solid style search icon.
 * @type {Object}
 */
import {
  faSearch,
  faImages,
  faHeart,
  faEye,
  faComment,
  faDownload,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

// Adding solid style icons to the library
library.add(
  faSearch,
  faImages,
  faHeart,
  faEye,
  faComment,
  faDownload,
  faArrowUp
);

// Watching the DOM for changes and automatically replacing icons with SVG elements
dom.watch();
