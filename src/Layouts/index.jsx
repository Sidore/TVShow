import * as React from "react";
import BaseLayout from "./BaseLayout";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

export default class MainLayout extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <BaseLayout />
          </Router>
      </Provider>
    );
  }
}
