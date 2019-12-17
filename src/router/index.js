import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
})                                                                                                                                                                                                                                              