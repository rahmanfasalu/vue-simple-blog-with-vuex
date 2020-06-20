import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import PostDetails from "./views/Post-Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: Home,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/home/:id",
      name: "post",
      component: PostDetails,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      // catch all 404
      path: "*",
      component: () => import("./components/404.vue"),
    },
  ],
});
