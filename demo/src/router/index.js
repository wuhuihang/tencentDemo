import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Frame from '@/view/frame'
import About from '@/view/about/about'
import Blogs from '@/view/blogs/blogs'
import Blog from '@/view/blogs/blog'
import Admin from '@/view/admin/admin'
import Service from '@/view/service/service'
import Chat from '@/view/chat/chat'
import service from '@/service'

Vue.use(Router)
Vue.use(service)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
        },
        {
          path: '/Chat',
          name: 'Chat',
          component: Chat
        },
        {
          path: '/Service',
          name: 'Service',
          component: Service
        }
      ]
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
