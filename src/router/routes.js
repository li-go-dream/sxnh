const My = () => import('@/pages/My')
const Mall = () => import('@/pages/Mall')
const Home = () => import('@/pages/Home')
const Cart = () => import('@/pages/Cart')
const Literature = () => import('@/pages/mall_pages/Literature')
const Humanities = () => import('@/pages/mall_pages/Humanities')
const Children = () => import('@/pages/mall_pages/Children')
const Education = () => import('@/pages/mall_pages/Education')
const Financial = () => import('@/pages/mall_pages/Financial')
const Leisure = () => import('@/pages/mall_pages/Leisure')
const Science = () => import('@/pages/mall_pages/Science')
const Culture = () => import('@/pages/mall_pages/Culture')
const Life = () => import('@/pages/mall_pages/Life')
const Custom = () => import('@/pages/mall_pages/Custom')

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
    isTabbar: true,
    children:[{
      path: 'literature',
      name: 'literature',
      component: Literature,
      text: '文学艺术'
    },
    {
      path: 'Humanities',
      name: 'humanities',
      component: Humanities,
      text: '人文社科'
    },
    {
      path: 'Children',
      name: 'children',
      component: Children,
      text: '少儿童书'
    },
    {
      path: 'Education',
      name: 'education',
      component: Education,
      text: '教育考试'
    },
    {
      path: 'Financial',
      name: 'financial',
      component: Financial,
      text: '经济金融'
    },
    {
      path: 'Leisure',
      name: 'leisure',
      component: Leisure,
      text: '生活休闲'
    },
    {
      path: 'Science',
      name: 'science',
      component: Science,
      text: '科学技术'
    },
    {
      path: 'Culture',
      name: 'culture',
      component: Culture,
      text: '文化用品'
    },
    {
      path: 'Life',
      name: 'life',
      component: Life,
      text: '生活用品'
    },
    {
      path: 'Custom',
      name: 'custom',
      component: Custom,
      text: '书香定制'
    }
   ]
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
