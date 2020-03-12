import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () => import('_v/index')
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('_v/media')
    },
    {
        path: '/moment',
        name: 'moment',
        component: () => import('_v/moment')
    },
    {
        path: '/market',
        name: 'market',
        component: () => import('_v/market')
    },
    {
        path: '/me',
        name: 'me',
        component: () => import('_v/me')
    }
]

const router = new VueRouter({
    routes
})

export default router