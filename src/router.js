import Vue from 'vue'
import Router from 'vue-router'
import Anime from './views/Anime'
import Auto from './views/Auto'
import Comedy from './views/Comedy'
import Education from './views/Education'
import Film from './views/Film'
import Gaming from './views/Gaming'
import Music from './views/Music'
import News from './views/News'
import Pets from './views/Pets'
import Science from './views/Science'
import Sports from './views/Sports'
import Vlogs from './views/Vlogs'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auto',
      name: 'Auto',
      component: Auto,
    },
    {
      path: '/comedy',
      name: 'Comedy',
      component: Comedy,
    },
    {
      path: '/education',
      name: 'Education',
      component: Education,
    },
    {
      path: '/film_and_animation',
      name: 'Film and Animation',
      component: Film,
    },
    {
      path: '/gaming',
      name: 'Gaming',
      component: Gaming,
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports,
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets,
    },
    {
      path: '/Science',
      name: 'Science',
      component: Science,
    },
    { path: '*', redirect: '/' }
  ]
})
