import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Frame = () => import('@/view/frame')
const About = () => import('@/view/about/about')
const Blogs = () => import('@/view/blogs/blogs')
const Blog = () => import('@/view/blogs/blog')
const Login = () => import('@/view/admin/login')
const Manage = () => import('@/view/admin/common/manage')
const Dashboard = () => import('@/view/admin/blog/dashboard')
const CreateBlog = () => import('@/view/admin/blog/create')
const BlogList = () => import('@/view/admin/blog/list')
const Responsive = () => import('@/view/h5/responsive')
const Animation = () => import('@/view/h5/animation')
const Lottery = () => import('@/view/h5/lottery')
const Comming = () => import('@/view/h5/comming')

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/frame',
    name: 'frame',
    component: Frame,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: Blogs
      },
      {
        path: '/blog',
        name: 'blog',
        component: Blog
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    redirect: '/manage/dashboard',
    children: [
      {
        path: '/manage/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/manage/blogList',
        name: 'blogList',
        component: BlogList,
        meta: {
          requireAuth: true,
          breadcrumb: ['数据管理', '博客列表']
        }
      },
      {
        path: '/manage/createBlog',
        name: 'createBlog',
        component: CreateBlog,
        meta: {
          requireAuth: true,
          breadcrumb: ['添加数据', '添加博客']
        }
      }
    ]
  },
  {
    path: '/responsive',
    name: 'responsive',
    component: Responsive
  },
  {
    path: '/animation',
    name: 'animation',
    component: Animation
  },
  {
    path: '/lottery',
    name: 'lottery',
    component: Lottery
  },
  {
    path: '/comming',
    name: 'comming',
    component: Comming
  }
]
let router = new Router({
  mode: 'history',
  // base: 'cyms',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = sessionStorage.getItem('HH_BLOG_TOKEN')
    if (token && token !== 'null') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
