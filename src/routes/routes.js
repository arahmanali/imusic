import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

import Layout from "../containers/Layout";
import authRoutes from "../containers/Auth/routes";
import { namespace } from "./namespace";

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: () => "/login",
  allowRedirectBack: false,
  authenticatedSelector: (state) => state.auth.isAuthenticated,
  wrapperDisplayName: "UserIsAuthenticated",
});

const routes = [
  ...authRoutes,
  {
    label: "Home",
    key: "home",
    path: "/",
    component: userIsAuthenticated(Layout),
    exact: false,
    routes: namespace,
  },
];

export default routes;
