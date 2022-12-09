import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

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
                path: "Life",
                name: "Life",
                component: () => import("../pages/type/Life.vue")
            }
        ]
    },
    {
        path: "/typeMore",
        name: "typeMore",
        component: () => import("../pages/type/typeMore.vue")
    },
    {
        path: "/item",
        name: "item",
        component: () => import("../pages/type/item.vue"),
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
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import("../pages/login.vue"),
    },
    {
        path: "/settings",
        name: "settings",
        component: () => import("../pages/settings.vue"),
    },
    {
        path: "/updateUser",
        name: "updateUser",
        component: () => import("../pages/updateUser.vue"),
    },
    {
        path: "/password",
        name: "password",
        component: () => import("../pages/updateUser/password.vue"),
    },
    {
        path: "/phone",
        name: "phone",
        component: () => import("../pages/updateUser/phone.vue"),
    },
    {
        path: "/Authentication",
        name: "Authentication",
        component: () => import("../pages/Authentication.vue"),
    },
    {
        path: "/Feedback",
        name: "Feedback",
        component: () => import("../pages/Feedback.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/login.vue"),
    },
    {
        path: "/orderCenter",
        name: "orderCenter",
        component: () => import("../pages/myOrder/orderCenter.vue"),
    },
    // {
    //     path: "/allOrder",
    //     name: "allOrder",
    //     component: () => import("../pages/myOrder/orderPages/allOrder.vue"),
    // },
];
const router = createRouter({
    history,
    routes
})
export default router
