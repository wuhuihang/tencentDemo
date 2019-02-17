import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Frame from '@/view/frame'
import About from '@/view/about/about'
import Archives from '@/view/archives/archives'
import Chat from '@/view/chat/chat'
import Service from '@/view/service/service'
import Tags from '@/view/tags/tags'
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
          path: '/Archives',
          name: 'Archives',
          component: Archives
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
        },
        {
          path: '/Tags',
          name: 'Tags',
          component: Tags
        }
      ]
    }
  ]
})
