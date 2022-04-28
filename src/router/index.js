import { createRouter, createWebHistory } from "vue-router";
import HomeA from "../views/HomeA.vue";

const routes = [
  {
    path: "/",
    name: "homeA",
    component: HomeA,
  },
  {
    path: "/form-b",
    name: "FormB",
    component: () =>
      import(/* webpackChunkName: "FormB" */ "../views/FormB.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: require("../views/FormA.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
