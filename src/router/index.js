import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index.vue";
import UsersIndex from "../views/Users/Index.vue";
import UsersCreate from "../views/Users/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/users",
    name: "UsersIndex",
    component: UsersIndex,
  },
  {
    path: "/users/create",
    name: "UsersCreate",
    component: UsersCreate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
