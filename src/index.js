import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./components/reducers";
import App from "./components/App";

import { combineReducers, createStore, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
