
const routes = [
  {
    path: '/',
    component: () => import('layouts/mainPage.vue'),
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/chat/index.vue') }
    ]
  },
  {
    path: '/login',
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
