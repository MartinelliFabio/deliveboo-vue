import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProductList from './pages/ProductList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'homepage',
            component: HomePage
        },

        {
            path: "/products",
            name: "products",
            component: ProductList,
        }
    ]
})
export { router };