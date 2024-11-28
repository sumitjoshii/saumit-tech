import { App } from 'vue';
import { BootFile } from 'quasar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPython,
  faJs,
  faVuejs,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faPython, faJs, faVuejs, faNodeJs);

const fontawesomeBoot: BootFile<{ app: App }> = ({ app }) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
};

export default fontawesomeBoot;
