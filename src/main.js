// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Login from 'components/Login'
import Register from 'components/Register'
import addTask from 'components/addTask'

import 'bulma/css/bulma.css'

import 'font-awesome/css/font-awesome.css'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')

const routes = [
{path: '/', component: App},
{path: '/login', component: Login},
{path: '/register', component: Register},
{path: '/addTask', component: addTask}
]

const router = new VueRouter({
  routes
})

global.apiUrl = 'http://192.168.10.7:8080/laratodo/public/api/v1/'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app'
})
