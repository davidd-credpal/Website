import Vue from "vue";
import VueRouter from "vue-router";
import Personal from "../views/Personal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Personal",
    component: Personal,
  },
  {
    path: "/business",
    name: "Business",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "business" */ "../views/Business.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/Pricing.vue"),
  },
  {
    path: "/company",
    name: "Company",
    component: () =>
      import(/* webpackChunkName: "company" */ "../views/Company.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/industries",
    name: "Industries",
    component: () =>
      import(/* webpackChunkName: "industries" */ "../views/Industries.vue"),
  },
  {
    path: "/marketingagencies",
    name: "Marketing Agencies",
    component: () =>
      import(
        /* webpackChunkName: "marketingagencies" */ "../views/MarketingAgencies.vue"
      ),
  },
  {
    path: "/features-and-benefits",
    name: "Features-and-Benefits",
    component: () =>
      import(
        /* webpackChunkName: "marketingagencies" */ "../views/Features-and-Benefits.vue"
      ),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignIn.vue"),
  },
  {
    path: "/createaccount",
    name: "CreateAccount",
    component: () =>
      import(
        /* webpackChunkName: "createaccount" */ "../views/CreateAccount.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: () => import(/* webpackChunkName: "faqs" */ "../views/FAQs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
