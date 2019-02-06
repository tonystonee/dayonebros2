import Vue from 'vue'
import Router from 'vue-router'
import Category from './views/Category'
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
      component: Category,
      props: {
        categoryId: 2,
      },
    },
    {
      path: '/comedy',
      name: 'Comedy',
      component: Category,
      props: {
        categoryId: 23,
      },
    },
    {
      path: '/education',
      name: 'Education',
      component: Category,
      props: {
        categoryId: 27,
      },
    },
    {
      path: '/film_and_animation',
      name: 'Film and Animation',
      component: Category,
      props: {
        categoryId: 1,
      },
    },
    {
      path: '/gaming',
      name: 'Gaming',
      component: Category,
      props: {
        categoryId: 20,
      },
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Category,
      props: {
        categoryId: 17,
      },
    },
    {
      path: '/music',
      name: 'Music',
      component: Category,
      props: {
        categoryId: 10,
      },
    },
    {
      path: '/news',
      name: 'News',
      component: Category,
      props: {
        categoryId: 25,
      },
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Category,
      props: {
        categoryId: 15,
      },
    },
    {
      path: '/Science',
      name: 'Science',
      component: Category,
      props: {
        categoryId: 28,
      },
    },
    { path: '*', redirect: '/' }
  ]
})
