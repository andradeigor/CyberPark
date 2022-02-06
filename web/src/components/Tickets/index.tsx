import React from "react";
import {
  TicketContainer,
  CloudImgLeft,
  CloudImgRight,
  CardsWarper,
  CardContainer,
  CardTitleContainer,
  CardTitle,
  CardTitleWraper,
  CardSubtitle,
} from "./styled";

import CloudLeftPath from "../../assets/cloudleft.svg";
import CloudRightPath from "../../assets/cloudright.svg";
const Ticket: React.FC = () => {
  return (
    <TicketContainer>
      <CloudImgLeft src={CloudLeftPath} />
      <CloudImgRight src={CloudRightPath} />
      <CardsWarper>
        <CardContainer>
          <CardTitleContainer>
            <CardTitleWraper>
              <CardTitle>Meia Entrada</CardTitle>
              <CardSubtitle>Dia de Semana</CardSubtitle>
            </CardTitleWraper>
          </CardTitleContainer>
        </CardContainer>
        <CardContainer>
          <CardTitleContainer>
            <CardTitleWraper>
              <CardTitle>Entrada</CardTitle>
              <CardSubtitle>Dia de Semana</CardSubtitle>
            </CardTitleWraper>
          </CardTitleContainer>
        </CardContainer>
      </CardsWarper>
    </TicketContainer>
  );
};

export default Ticket;
