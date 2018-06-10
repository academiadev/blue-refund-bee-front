import Vue from 'vue'
import Router from 'vue-router'
import LoginScreen from '@/components/LoginScreen'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
