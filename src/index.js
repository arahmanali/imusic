import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";
import storeObj from "./store";
import reportWebVitals from './reportWebVitals';

import "./styles/index.css";

const root = document.getElementById("root");

const reloader = (Component) => {
  if (root !== null) {
    render(
      // <React.StrictMode>
      <Provider store={storeObj.store}>
        <PersistGate persistor={storeObj.persistor}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </PersistGate>
      </Provider>,
      // </React.StrictMode>
      root
    );
  }
};

reloader(Routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
