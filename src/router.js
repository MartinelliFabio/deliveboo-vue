import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ShopkeeperList from './pages/ShopkeeperList.vue';
import NotFound from './pages/NotFound.vue';
import SingleShop from './pages/SingleShop.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'homepage',
            component: HomePage
        },

        {
            path: "/shopkeepers",
            name: "shopkeepers",
            component: ShopkeeperList ,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound ,
        },
        {
            path:'/shopkeepers/:slug',
            name: 'single-shop',
            component:SingleShop
        },
        {
            path: "/about",
            name: "about",
            component: AboutUs,
        }
    ]
})
export { router };