import { RouteRecordRaw } from 'vue-router';
const page404 = () => import('@/views/errors/404.vue');



export const useErrorRoute = () => ({
    name: '404',
    path: '/:pathMatch(.*)*',
    component: page404,
} as RouteRecordRaw)
