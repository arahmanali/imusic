import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";

import AuthConnect from "../Auth";
import Login from "../../components/Auth";

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  allowRedirectBack: false,
  authenticatedSelector: (state) => !state.auth.isAuthenticated,
  wrapperDisplayName: "UserIsNotAuthenticated",
});

const routes = [
  {
    path: "/login",
    component: AuthConnect(userIsNotAuthenticated(Login)),
    exact: true,
  },
];

export default routes;
