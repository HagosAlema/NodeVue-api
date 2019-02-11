import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/header-nav'
import HomePage from '@/components/HomePage'
import MainPage from '@/components/MainPage'
import ImageResize from '@/components/ImageResize'
import AddProduct from '@/components/AddProduct'
import MemberRegistration from '@/components/MemberRegistration'
// import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'main',
          component: MainPage // 메인 페이지
        },
        {
          path: '/resize',
          name: 'resize',
          component: ImageResize // 메인 페이지
        },
        {
          path: '/product/add',
          name: 'add-product',
          component: AddProduct // 메인 페이지
        },
        {
          path: '/login',
          name: 'login',
          component: MemberRegistration
        }
      ]
    }
  ],
  mode: 'history'
})
