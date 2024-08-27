import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRoutes from "./authRoutes";
let VueCookies = require("vue-cookies");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requireAuth: false },
  },
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Protecting routes

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some((record) => record.meta.requireAuth);
  if (protectedRoute && VueCookies.get("token") === null) {
    next({ name: "SignIn" });
  } else {
    next();
  }
});

export default router;
