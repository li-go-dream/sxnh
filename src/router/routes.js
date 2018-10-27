const My = () => import('@/pages/My')
const Mall = () => import('@/pages/Mall')
const Home = () => import('@/pages/Home')
const Cart = () => import('@/pages/Cart')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    text: '首页',
    isTabbar: true
  },
  {
    path: '/mall',
    name: 'mall',
    component: Mall,
    text: '分类',
    isTabbar: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    text: '购物车',
    isTabbar: true
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    text: '我',
    isTabbar: true
  }
]
