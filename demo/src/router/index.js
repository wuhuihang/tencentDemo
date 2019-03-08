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
      redirect: '/Blogs'
    },
    {
      path: '/Frame',
      name: 'Frame',
      component: Frame,
      redirect: '/About',
      children: [
        {
          path: '/About',
          name: 'About',
          component: About
        },
        {
          path: '/Blogs',
          name: 'Blogs',
          component: Blogs
        },
        {
          path: '/Blog',
          name: 'Blog',
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
      redirect: '/admin/CreateBlog',
      children: [
        {
          path: '/admin/Dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/admin/CreateBlog',
          name: 'CreateBlog',
          component: CreateBlog
        }
      ]
    }
  ]
})
