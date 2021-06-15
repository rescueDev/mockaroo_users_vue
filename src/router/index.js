import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index.vue";
import UsersIndex from "../views/Users/Index.vue";
import UsersCreate from "../views/Users/Create.vue";
import UserShow from "../views/Users/Show.vue";
import UI from "../views/UI.vue";
import NotFound from "@/components/404.vue";

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
  {
    path: "/users/user/:id",
    name: "UserShow",
    component: UserShow,
  },
  {
    path: "/ui",
    name: "UI",
    component: UI,
  },
  {
    path: "*",
    component: NotFound,
    name: "404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
