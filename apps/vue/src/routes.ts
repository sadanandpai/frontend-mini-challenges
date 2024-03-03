import type { RouteRecordRaw } from 'vue-router';

import Challenge from './pages/challenge.vue';
import Counter from './challenges/counter/index.vue';
import TelephoneFormatter from './challenges/telephone-formatter/index.vue';
import GuessTheNumber from './challenges/guess-the-number/index.vue';
import LightDarkMode from './challenges/light-dark-mode/index.vue';
import TableColorizer from './challenges/table-colorizer/index.vue';
import Pagination from './challenges/pagination/index.vue';
import Accordion from './challenges/accordion/index.vue';
import ToastPopup from './challenges/toast-popup/index.vue';
import PasswordStrength from './challenges/password-strength/index.vue';
import Stack from './challenges/stack/index.vue';
import PasswordGenerator from './challenges/password-generator/index.vue';
import Stopwatch from './challenges/stopwatch/index.vue';
import TempratureConverter from './challenges/temprature-converter/index.vue';
import TicTacToe from './challenges/tic-tac-toe/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Challenge,
    children: [
      // All challenge components here...
      // Note: The path should match with the challenge id/key

      {
        path: '/counter',
        component: Counter,
      },
      {
        path: '/telephone-formatter',
        component: TelephoneFormatter,
      },
      {
        path: '/guess-the-number',
        component: GuessTheNumber,
      },
      {
        path: '/light-dark-mode',
        component: LightDarkMode,
      },
      {
        path: '/table-colorizer',
        component: TableColorizer,
      },
      {
        path: '/pagination',
        component: Pagination,
      },
      {
        path: '/accordion',
        component: Accordion,
      },
      {
        path: '/toast-popup',
        component: ToastPopup,
      },
      {
        path: '/password-strength',
        component: PasswordStrength,
      },
      {
        path: '/stack',
        component: Stack,
      },
      {
        path: '/password-generator',
        component: PasswordGenerator,
      },
      {
        path: '/stopwatch',
        component: Stopwatch,
      },
      {
        path: '/temprature-converter',
        component: TempratureConverter,
      },
      {
        path: '/tic-tac-toe',
        component: TicTacToe,
      },
    ],
  },
];

export default routes;
