import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Count from '../views/Count.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'count',
            components: Count
        },
        {
            path: '/about',
            name: 'about',
            components: About
        },
    ]
})                                                                                                                                                                                                                                              