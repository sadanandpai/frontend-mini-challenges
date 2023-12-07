import type { RouteRecordRaw } from "vue-router";

import Challenges from "./pages/challenges.vue";
import Challenge from "./pages/challenge.vue";

// All challenge components static imports here...
import Counter from "./challenges/counter/index.vue";
import TelephoneFormatter from "./challenges/telephone-formatter/index.vue";
import GuessTheNumber from "./challenges/guess-the-number/index.vue";
import LightDarkMode from "./challenges/light-dark-mode/index.vue";
import TableColorizer from "./challenges/table-colorizer/index.vue";
import Pagination from "./challenges/pagination/index.vue";
import Accordion from "./challenges/accordion/index.vue";
import ToastPopup from "./challenges/toast-popup/index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Challenges },
  {
    path: "/challenges",
    redirect: "/",
    component: Challenge,
    children: [
      // All challenge components here...
      // Note: The path should match with the challenge id/key

      {
        path: "/counter",
        component: Counter,
      },
      {
        path: "/telephone-formatter",
        component: TelephoneFormatter,
      },
      {
        path: "/guess-the-number",
        component: GuessTheNumber,
      },
      {
        path: "/light-dark-mode",
        component: LightDarkMode,
      },
      {
        path: "/table-colorizer",
        component: TableColorizer,
      },
      {
        path: "/pagination",
        component: Pagination,
      },
      {
        path: "/accordion",
        component: Accordion,
      },
      {
        path: "/toast-popup",
        component: ToastPopup,
      },
    ],
  },
];

export default routes;
