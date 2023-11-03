import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component:  () => import("@/components/Pages/Welcome.vue"),  },
];

const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    routes,
});

export default router;