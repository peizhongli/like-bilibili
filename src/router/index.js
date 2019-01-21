import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/Index.vue'
import channel from '../pages/Channel.vue'
import dynamic from '../pages/Dynamic.vue'
import game from '../pages/Game.vue'
import load from '../pages/Load.vue'
import message from '../pages/Message.vue'
import live from '../pages/Live.vue'
import recommend from '../pages/Recommend.vue'
import hot from '../pages/Hot.vue'
import subscribe from '../pages/subscribe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          component: recommend
        },
        {
          path: 'live',
          name: 'live',
          component: live
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: 'hot',
          name: 'hot',
          component: hot
        },
        {
          path: 'subscribe',
          name: 'subscribe',
          component: subscribe
        }
      ]
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
