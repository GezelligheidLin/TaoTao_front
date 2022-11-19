import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/Home",
    },
    {
        path: "/Home",
        name: "Home",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/Type",
        name: "Type",
        component: () => import("../pages/Type.vue"),
    },
    {
        path: "/shoppingTrolley",
        name: "shoppingTrolley",
        component: () => import("../pages/shoppingTrolley.vue"),
    },
    {
        path: "/mine",
        name: "mine",
        component: () => import("../pages/mine.vue"),
    }
];
const router = createRouter({
    history,
    routes
})
export default router
