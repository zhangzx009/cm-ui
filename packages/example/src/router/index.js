import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/example',
        name: 'example',
        component: () => import('../views/Example.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('../views/InfoDemo.vue')
    },
    {
        path: '/picker',
        name: 'picker',
        component: () => import('../views/PickerDemo.vue')
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('../views/IconDemo.vue')
    },
    {
        path: '/image',
        name: 'image',
        component: () => import('../views/ImageDemo.vue')
    },
    {
        path: '/overlay',
        name: 'overlay',
        component: () => import('../views/OverlayDemo.vue')
    },
    {
        path: '/popup',
        name: 'popup',
        component: () => import('../views/PopupDemo.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
