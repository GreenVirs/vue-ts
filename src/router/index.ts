import { createRouter, createWebHistory } from 'vue-router';
import { useHomeRoute } from './home';
import { useAboutRoute } from './about';
import { useErrorRoute } from './error';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        useHomeRoute(),
        useAboutRoute(),
        useErrorRoute(),
    ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.enabledAuth) {
        next({
            name: '404',
            params: {
                pathMatch: to.path.substring(1).split('/')
            }
        });
    } else {
        next();
    }
})
export { router };
