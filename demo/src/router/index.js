import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/view/frame'
import About from '@/view/about/about'
import Blogs from '@/view/blogs/blogs'
import Blog from '@/view/blogs/blog'
import Login from '@/view/admin/login'
import Admin from '@/view/admin/admin'
import Dashboard from '@/view/admin/blog/dashboard'
import CreateBlog from '@/view/admin/blog/createBlog'
import service from '@/service'

Vue.use(Router)
Vue.use(service)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: '/admin/createBlog',
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/admin/createBlog',
          name: 'createBlog',
          component: CreateBlog
        }
      ]
    }
  ]
})
