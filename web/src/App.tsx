import React from "react";
import GlobalTheme from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme/light";
import Header from "./components/Header/index";
const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
        <GlobalTheme />
        <Header />
      </ThemeProvider>
    </div>
  );
};

export default App;
