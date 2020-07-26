import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/editor",
    name: "editor_new",
    component: () => import("@/views/ArticleCreate.vue")
  },
  {
    path: "/editor/:article_slug",
    name: "editor_edit",
    component: () => import("@/views/ArticleEdit.vue")
  },
  {
    path: "/article/:article_slug",
    name: "article",
    component: () => import("@/views/Article.vue")
  },
  {
    path: "/:username",
    name: "profile",
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
