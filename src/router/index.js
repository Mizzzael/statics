import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cores',
        name: 'Colors',
        component: () => import('../views/Colors.vue'),
    },
    {
        path: '/SVG',
        name: 'Icons',
        component: () => import('../views/Icones.vue'),
    },
    {
        path: '/icones',
        name: 'Icons',
        component: () => import('../views/Icons.vue'),
    },
    {
        path: '/ui',
        name: 'UI',
        component: () => import(/* webpackChunkName: "about" */ '../views/Ui.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
