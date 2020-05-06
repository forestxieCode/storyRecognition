import Vue from 'vue'
import Router from 'vue-router'
import Poetry from '@/views/Poetry'
import PlayVideo from '@/views/PlayVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Poetry',
      component: Poetry
    },
    {
      path: '/PlayVideo',
      name: 'PlayVideo',
      component: PlayVideo
    }
  ]
})
