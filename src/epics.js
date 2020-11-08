import { combineEpics } from "redux-observable";

// import epics here
import { authEpics } from "./containers/Auth/epics";
import { dashboardEpics } from "./containers/Dashboard/epics";
import { favAlbumsEpics } from "./containers/Favorite/epics";

export const rootEpic = combineEpics(
  ...authEpics,
  ...dashboardEpics,
  ...favAlbumsEpics
);
