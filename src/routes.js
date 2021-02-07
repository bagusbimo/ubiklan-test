import Home from '@/views/Home.vue'
// import About from './views/About.vue'
import Invoice from '@/views/Invoice.vue'
import Osf from '@/views/Osf.vue'
import Sbn from '@/views/Sbn.vue'
import Reksadana from '@/views/Reksadana.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue'),
    // component: About
  },
  {
    path: '/invoice',
    component: Invoice,
    meta: { title: 'Invoice' },
    props: (route) => ({
      type: route.query.type,
    }),
  },
  {
    path: '/osf',
    component: Osf,
    meta: { title: 'Osf' },
    props: (route) => ({
      type: route.query.type,
    }),
  },
  {
    path: '/sbn',
    component: Sbn,
    meta: { title: 'Sbn' }
  },
  {
    path: '/reksadana',
    component: Reksadana,
    meta: { title: 'Reksadana' }
  },
  { path: '/:path(.*)', component: NotFound },
]
