import { type RouteConfig, index,
  route,
  layout,
  prefix, } from "@react-router/dev/routes";

export default [
  layout("layouts/mainLayout.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("test", "routes/test.tsx"),
  ]),
  ] satisfies RouteConfig;
