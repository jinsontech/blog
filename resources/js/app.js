
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)
//moment js
import moment from 'moment';
//vform
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
//sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
window.Toast = Toast;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue')},
    { path: '/category', component: require('./components/Category.vue')},
    { path: '/tags', component: require('./components/Tags.vue')},
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  Vue.filter('capitalize', function (created) {
    if (!created) return ''
    created = created.toString()
    return text.charAt(0).toUpperCase() + text.slice(1);
  })

  Vue.filter('myDate', function (created) {
    return moment(created).format('MMMM Do YYYY');
  })

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
