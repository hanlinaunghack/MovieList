import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import store from "../store/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <div className="center">
      <h1>Movie List</h1>
      <div>
        <App />
      </div>
    </div>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
