import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

// import reducers here
import auth from "./containers/Auth/reducer";
import dashboard from "./containers/Dashboard/reducer";
import favorite from "./containers/Favorite/reducer";

const reducers = {
  routing,
  auth,
  dashboard,
  favorite,
};

export default combineReducers(reducers);
