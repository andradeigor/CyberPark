import React from "react";
import GlobalTheme from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme/light";
import Header from "./components/Header/index";
import Carousel from "./components/Carousel/index";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalTheme />
      <Header />
      <Carousel />
    </ThemeProvider>
  );
};

export default App;
