// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/authentication",
    name: "authentication",
    component: () => import("@/views/authentication/index.vue"),
  },
  {
    path: "/questions",
    name: "questions",
    component: () => import("@/views/questions/index.vue"),
  },
  {
    path: "/indicator",
    name: "indicator",
    component: () => import("@/views/indicator/index.vue"),
  },
  {
    path: "/sleep",
    name: "sleep",
    component: () => import("@/views/sleep/index.vue"),
  },
  {
    path: "/gratitude",
    name: "gratitude",
    component: () => import("@/views/gratitude/index.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error/index.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("@/views/logout/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
