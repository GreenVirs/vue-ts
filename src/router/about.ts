import { RouteRecordRaw } from 'vue-router';
const About = () => import('@/views/About.vue');

export const useAboutRoute = () => ({
    name: 'about',
    path: '/about',
    meta: {
        layout: 'empty',
        enabledAuth: true
     },
    component: About,
} as RouteRecordRaw)
