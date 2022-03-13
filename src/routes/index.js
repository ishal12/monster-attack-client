import { createWebHistory, createRouter } from 'vue-router';
import { nextTick } from 'vue';

import DashboardLayout from '@/layouts/DashboardLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

import Dashboard from '@/views/Dashboard';
import MainMenu from '@/views/MainMenu';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Leaderboard from '@/views/Leaderboard';
import Quest from '@/views/Quest';

const routes = [
    {
        path: '/',
        redirect: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'main-menu',
                components: { default: MainMenu },
            },
            {
                path: '/login',
                name: 'login',
                components: { default: Login },
            },
            {
                path: '/register',
                name: 'register',
                components: { default: Register },
            }
        ]
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                components: { default: Dashboard },
            },
            {
                path: '/leaderboard',
                name: 'leaderboard',
                components: { default: Leaderboard },
            },
            {
                path: '/quest',
                name: 'quest',
                components: { default: Quest },
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const DEFAULT_TITLE = "Monster Attack";

// router.beforeEach(async (to, from) => {
//     if (
//       // make sure the user is authenticated
//       !isAuthenticated &&
//       // ❗️ Avoid an infinite redirect
//       to.name === 'dashboard'
//     ) {
//       // redirect the user to the login page
//       return { name: 'login' }
//     }
//   })

router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;