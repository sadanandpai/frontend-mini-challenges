import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./pages/challenges.vue') },
  {
    path: '/challenges',
    redirect: '/',
    component: () => import('./pages/challenge.vue'),
    children: [

      // All challenge components here...

      {
        path: '/counter',
        component: () => import('./machine-coding/counter/index.vue')
      }
    ]
  }
]

export default routes