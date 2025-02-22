const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/posts',
    component: () => import('pages/PostsPage.vue')
  },
  {
    path: '/posts/create',
    component: () => import('pages/CreatePostPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
