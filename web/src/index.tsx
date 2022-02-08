import React from "react";
import ReactDOM from "react-dom";
import GlobalTheme from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme/light";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalTheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
