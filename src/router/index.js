import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Details.vue'
import Cart from '../views/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/productlist',
        name: 'product-list',
        component: ProductList
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }

]

const router = new VueRouter({
  routes
})

export default router
