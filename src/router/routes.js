import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      // 默认跳转到首页
      {
        path: '',
        redirect: '/home',
      },
      // 首页 tab
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
      },
      // 百科 tab
      {
        path: 'library',
        name: 'Library',
        component: () => import('@/views/Library/Library.vue'),
      },
      // 收藏 tab
      {
        path: 'favorites',
        name: 'Favorites',
        component: () => import('@/views/Favorites/Favorites.vue'),
      },
      // 我的 tab
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Profile/Profile.vue'),
      },
    ],
  },
]

export default routes
