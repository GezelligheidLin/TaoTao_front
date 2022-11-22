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
        children: [
            {
                path:"Life",
                name:"Life",
                component:()=>import("../pages/Life.vue")
            }
        ]
    },
    {
        path: "/shoppingTrolley",
        name: "shoppingTrolley",
        component: () => import("../pages/shoppingTrolley.vue"),
    },
    {
        path: "/leaderboard",
        name: "leaderboard",
        component: () => import("../pages/leaderboard.vue"),
    },
    {
        path: "/mine",
        name: "mine",
        component: () => import("../pages/mine.vue"),
    },
    {
        path: "/Details",
        name: "Details",
        component: () => import("../pages/Details.vue"),
    }
];
const router = createRouter({
    history,
    routes
})
export default router
