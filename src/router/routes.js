
const routes = [
  {
    path: '/home',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: 'threads', component: () => import('pages/threads/index.vue') },
      { path: 'dms', component: () => import('pages/dms/index.vue') },
      { path: 'mentions', component: () => import('pages/mentions/index.vue') },
      { path: 'items', component: () => import('pages/items/index.vue') },
      { path: 'dms', component: () => import('pages/dms/index.vue') },
      { path: 'directs', component: () => import('pages/directs/index.vue') },
      { path: 'chat', component: () => import('pages/chat/index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
