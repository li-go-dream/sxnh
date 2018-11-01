const My = () => import('@/pages/My/My')
const Mall = () => import('@/pages/Mall')
const Home = () => import('@/pages/Home')
const Cart = () => import('@/pages/Cart')


const Login = () => import('@/pages/Login/Login.vue')

const List = () => import('@/pages/List')
const Details = () => import('@/pages/Details')

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
    isTabbar: true,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    text: '我',
    isTabbar: true,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    text: '登录'
    isTabbar: true
  },
  {
    path: '/list/:id',
    name: 'list',
    component: List
  },
  {
    path: '/details/:id',
    name: 'detail',
    component: Details

  }
]
