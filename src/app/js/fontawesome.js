import { library, dom } from "@fortawesome/fontawesome-svg-core";

import {
  faSearch,
  faImages,
  faHeart,
  faEye,
  faComment,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faImages, faHeart, faEye, faComment, faDownload);

dom.watch();
