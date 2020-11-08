import * as React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import NotFound from "../components/Commons/404";

const NestedRoute = (props) => (
  <Route
    exact={props.exact}
    path={props.path}
    render={(p) => (
      <props.component {...p} label={props.label} children={props.children} />
    )}
  />
);

const Routes = () => (
  <Switch>
    {routes.map((route, i) => (
      <NestedRoute key={i} {...route}>
        {route.routes &&
          route.routes.map((childRoute, j) => (
            <NestedRoute key={j} {...childRoute} />
          ))}
      </NestedRoute>
    ))}

    {/* Not Found */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
