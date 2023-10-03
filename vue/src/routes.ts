import type { RouteRecordRaw } from 'vue-router'

import Challenges from './pages/challenges.vue'
import Challenge from './pages/challenge.vue'

// All challenge components static imports here...
import Counter from './machine-coding/counter/index.vue'
import TelephoneFormatter from './machine-coding/telephone-formatter/index.vue'
import GuessTheNumber from './machine-coding/guess-the-number/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Challenges },
  {
    path: '/challenges',
    redirect: '/',
    component: Challenge,
    children: [

      // All challenge components here...
      // Note: The path should match with the challenge id/key

      {
        path: '/counter',
        component: Counter
      },
      {
        path: '/telephone-formatter',
        component: TelephoneFormatter
      },
      {
        path: '/guess-the-number',
        component: GuessTheNumber
      }
    ]
  }
]

export default routes