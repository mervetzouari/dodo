import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KissatiLire from "../views/KissatiLire.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/Lire",
            name: "Hist-Lire",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/HistLire.vue"),
        },
        {
            path: "/Video",
            name: "Hist-Video",
            component: () => import("../views/HistVideo.vue"),
        },
        {
            path: "/Kissati",
            name: "kissati-Lire", 
            component: KissatiLire,
        },
        {
            path: "/Lire35",
            name: "Lire-3-5",
            component: () => import("../views/Lire35.vue"),
        },
        {
            path: "/Lire5",
            name: "Lire-5",
            component: () => import("../views/LirePlus5.vue"),
        },
       
        {
            path: "/KissatiVid",
            name: "Kissati-Video",
            component: () => import("../views/KissatiVideo.vue"),
        },
        {
            path: "/VidFr",
            name: "Video-Fr",
            component: () => import("../views/VideoFr.vue"),
        },
        {
            path: "/VidEng",
            name: "Video-Eng",
            component: () => import("../views/VideoEng.vue"),
        },
    ],
});

export default router;
