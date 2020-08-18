import Vue from 'vue'
import App from './App.vue'
// impport Vue Router
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueRouter);

// import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'sweetalert/dist/sweetalert.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

// import component
import PostsIndex from './components/posts/Index'
import PostsCreate from './components/posts/Create'
import PostsEdit from './components/posts/Edit'


Vue.config.productionTip = false

Vue.use(VueSweetalert2);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name:'posts',
      component: PostsIndex
    },
    {
      path: '/create',
      name: 'create',
      component: PostsCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PostsEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
