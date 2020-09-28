import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";
import "./i18next";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={"...loading"}>
        <Router>
          <App />
        </Router>
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
