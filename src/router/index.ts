import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component:  () => import(/* webpackChunkName: "about" */ '@/views/Products.vue'),
    },
    {
        path: '/product/:id',
        name: 'Product Details',
        component:  () => import(/* webpackChunkName: "about" */ '@/views/ProductDetails.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        children: [
            {
                path: 'me',
                name: 'About Me',
                component: () => import('@/views/about/AboutMe.vue'),
            },
            {
                path: 'company',
                name: 'About Company',
                component: () => import('@/views/about/AboutCompany.vue'),
            },

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
