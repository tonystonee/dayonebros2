import Vue from 'vue'
import Router from 'vue-router'
import Category from './views/Category'
import Home from './views/Home'
import colors from 'vuetify/es5/util/colors'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        primary: colors.red,
      },    
    },
    {
      path: '/auto',
      name: 'Auto',
      component: Category,
      props: {
        categoryId: 2,
        primary: colors.red,
      },
    },
    {
      path: '/comedy',
      name: 'Comedy',
      component: Category,
      props: {
        categoryId: 23,
        primary: colors.blue,
      },
    },
    {
      path: '/education',
      name: 'Education',
      component: Category,
      props: {
        categoryId: 27,
        primary: colors.yellow,
      },
    },
    {
      path: '/film_and_animation',
      name: 'Film and Animation',
      component: Category,
      props: {
        categoryId: 1,
        primary: colors.pink,
      },
    },
    {
      path: '/gaming',
      name: 'Gaming',
      component: Category,
      props: {
        categoryId: 20,
        primary: colors.red,
      },
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Category,
      props: {
        categoryId: 17,
        primary: colors.green,
      },
    },
    {
      path: '/music',
      name: 'Music',
      component: Category,
      props: {
        categoryId: 10,
        primary: colors.blue,
      },
    },
    {
      path: '/news',
      name: 'News',
      component: Category,
      props: {
        categoryId: 25,
        primary: colors.lightBlue,
      },
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Category,
      props: {
        categoryId: 15,
        primary: colors.lightGreen,
      },
    },
    {
      path: '/Science',
      name: 'Science',
      component: Category,
      props: {
        categoryId: 28,
        primary: colors.green,
      },
    },
    { path: '*', redirect: '/' }
  ]
})
