import Vue from 'vue'
import VueRouter from 'vue-router'
import DisneyPlus from '../views/DisneyPlus.vue'
import $ from 'jquery'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/DisneyPlus'
},
{
  path: '/DisneyPlus',
  name: 'DisneyPlus',
  component: DisneyPlus
},
{
  path: '/DisneyPlus/MacOS',
  name: 'MacOS',
  component: () => import(/* webpackChunkName: "about" */ '../views/Mac.vue')
},
{
  path: '/DisneyPlus/Windows',
  name: 'Windows',
  // component: Home
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Windows.vue')
},
{
  path: '/DisneyPlus/iOS',
  name: 'iOS',
  component: () => import(/* webpackChunkName: "about" */ '../views/iOS.vue')
},
{
  path: '/DisneyPlus/Android',
  name: 'Android',
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Android.vue')
}
  // {
  //   path: '/Windows',
  //   name: 'Windows',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from, next) => {
  if (!$('#nav').offset()) return
  $('html, body').animate({
    scrollTop: $('#nav').offset().top
  }, 600)
})

export default router
