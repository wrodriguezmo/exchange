import { createWebHistory, createRouter } from 'vue-router'

import Login from '../pages/Login'
import App from '../App'

const routes = [{
        path: '/',
        name: "root",
        component: App
    }, {
        path: '/login',
        name: "login",
        component: Login
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: Login }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn)
      return next('/login');
    else next();
})
export default router