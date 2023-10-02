import type { RouteRecordRaw } from 'vue-router'

import Challenges from './pages/challenges.vue'
import Challenge from './pages/challenge.vue'

// All challenge components static imports here...
import Counter from './machine-coding/counter/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Challenges },
  {
    path: '/challenges',
    redirect: '/',
    component: Challenge,
    children: [

      // All challenge components here...

      {
        path: '/counter',
        component: Counter
      }
    ]
  }
]

export default routes