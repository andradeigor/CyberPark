import React from "react";
import GlobalTheme from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme/light";
import Header from "./components/Header/index";
import Carousel from "./components/Carrossel/index";
import Ticket from "./components/Tickets";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalTheme />
      <Header />
      <Carousel />
      <Ticket />
    </ThemeProvider>
  );
};

export default App;
