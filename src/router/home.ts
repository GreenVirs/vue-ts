import { RouteRecordRaw } from 'vue-router';
const Home = () => import('@/views/Home.vue');



export const useHomeRoute = () => ({
    name: 'home',
    path: '/',
    component: Home,
} as RouteRecordRaw)