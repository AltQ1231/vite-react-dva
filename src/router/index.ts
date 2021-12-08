import loadable from "@loadable/component";
import Layout, { MainLayout } from "@/layout";
import { RouteConfig } from "react-router-config";
import Home from "@/pages/home";

const routesConfig: RouteConfig[] = [
  // APP 路由
  {
    component: Layout,
    routes: [
      {
        exact: true,
        path: "/",
        component: Home,
        name: "home",
      },
      {
        path: "/about",
        exact: true,
        name: "about",
        component: loadable(() => import("@/pages/about")),
      },
      {
        path: "/login",
        exact: true,
        name: "login",
        component: loadable(() => import("@/pages/login")),
      },
      {
        path: "/main",
        component: MainLayout,
        routes: [
          {
            path: "/main/screen",
            exact: true,
            name: "screen",
            component: loadable(() => import("@/pages/screen")),
          },
          {
            path: "*",
            exact: false,
            name: "404",
            component: loadable(() => import("@/pages/404")),
          },
        ],
      },
      {
        path: "*",
        exact: false,
        name: "404",
        component: loadable(() => import("@/pages/404")),
      },
    ],
  },
];

export default routesConfig;
