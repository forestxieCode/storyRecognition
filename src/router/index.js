import Vue from 'vue'
import Router from 'vue-router'
import story_21 from '@/views/story_21'
import PlayVideo from '@/components/PlayVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/story_21'
    },
    {
      path: '/story_21',
      name: '小羊过河',
      component: story_21
    },
    {
      path: '/PlayVideo',
      name: 'PlayVideo',
      component: PlayVideo
    }
  ]
})
