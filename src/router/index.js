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
        name: 'SVGs',
        component: () => import('../views/SVGs.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/SVGs/Index.vue'),
            },
            {
                path: 'browsers',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'socialmedia',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'codigos',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'design',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'moedas-digitais',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'os',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'musicas',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'dinheiro',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'produtividade',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'video',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'mensagens',
                component: () => import('../components/SVGs/List.vue'),
            },
            {
                path: 'outros',
                component: () => import('../components/SVGs/List.vue'),
            },
        ],
    },
    {
        path: '/icones',
        name: 'Icons',
        component: () => import('../views/Icons.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
