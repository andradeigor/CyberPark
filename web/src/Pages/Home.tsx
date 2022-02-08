import React from "react";
import Header from "../components/Header/index";
import Carousel from "../components/Carrossel/index";
import Ticket from "../components/Tickets";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Ticket />
    </>
  );
};

export default Home;
