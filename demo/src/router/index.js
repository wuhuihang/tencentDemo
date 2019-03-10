import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Frame = r => require(['@/view/frame'], r)
const About = r => require(['@/view/about/about'], r)
const Blogs = r => require(['@/view/blogs/blogs'], r)
const Blog = r => require(['@/view/blogs/blog'], r)
const Login = r => require(['@/view/admin/login'], r)
const Manage = r => require(['@/view/admin/common/manage'], r)
const Dashboard = r => require(['@/view/admin/blog/dashboard'], r)
const CreateBlog = r => require(['@/view/admin/blog/create'], r)
const BlogList = r => require(['@/view/admin/blog/list'], r)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/blogs'
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
