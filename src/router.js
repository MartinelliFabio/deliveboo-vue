import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ShopkeeperList from './pages/ShopkeeperList.vue';
import NotFound from './pages/NotFound.vue';
import SingleShop from './pages/SingleShop.vue';
import AboutUs from './pages/AboutUs.vue';
import carrello from './components/CartComponent.vue';
import checkout from './pages/Checkout.vue';

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
        },
        {
            path: "/cart",
            name: "cart",
            component: carrello,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: checkout,
        },
    ]
})
export { router };