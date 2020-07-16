import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "fontsource-roboto";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { enUS } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    // palette: {
    //   primary: { main: '#1976d2' },
    // },
  },
  enUS
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
