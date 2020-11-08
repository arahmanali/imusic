import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { createBrowserHistory } from "history";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "./reducer";
import { rootEpic } from "./epics";

// get history object from the browser
export const history = createBrowserHistory();
// create epic middleware
const epicMiddleware = createEpicMiddleware();
// initialize enhancers
const enhancers = [];

const persistConfig = {
  key: "root",
  version: process.env.REACT_APP_VERSION,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create middleware array
const middleware = [routerMiddleware(history), epicMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const store = createStore(
    connectRouter(history)(persistedReducer),
    composeWithDevTools(composedEnhancers)
  );

  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);

  return { store, persistor };
};
/* eslint-enable */

// enable redux devtools
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

export default configureStore();
