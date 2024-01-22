import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.scss";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
