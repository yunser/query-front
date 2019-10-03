import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Check = resolve => require(['@/views/Check'], resolve)
const Common = resolve => require(['@/views/Common'], resolve)
const Generation = resolve => require(['@/views/Generation'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        redirect: '/search'
        // component: Home
    },
    {
        path: '/search',
        component: Home
    },
    {
        path: '/check',
        component: Check
    },
    {
        path: '/common',
        component: Common
    },
    {
        path: '/generation',
        component: Generation
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
