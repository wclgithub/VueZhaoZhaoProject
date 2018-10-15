import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Apart from '@/components/Apart'
import Article from '@/components/Article'
import ShoppingMall from '@/components/ShoppingMall'
import Cart from '@/components/Cart'
import PersonalCenter from '@/components/PersonalCenter'


Vue.use(Router)

export default new Router({
  routes: [
    // 将组件添加到路由
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/apart',
      name: 'Apart',
      component: Apart,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/shoppingmall',
      name: 'ShoppingMall',
      component: ShoppingMall,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
    },

  ]
})
