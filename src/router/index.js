import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/book'
    },
    {
      path: '/book',
      component: Book
    }
  ]
})
