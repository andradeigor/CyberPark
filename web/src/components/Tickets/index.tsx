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
  CardMainDivider,
  CardImage,
  CardImageContainer,
  CardPeopleContainer,
  CardPeopleLogo,
  CardPeopleText,
  CardSubDivider,
  CardPriceContainer,
  CardPriceText,
  CardAmountButtonsContainer,
  CardAmountButtons,
  CardAmountButtonsText,
  CardAmountButtonsTextMinus,
} from "./styled";

import CloudLeftPath from "../../assets/cloudleft.svg";
import CloudRightPath from "../../assets/cloudright.svg";
import CardFrente from "../../assets/CardFrente.png";
import UserLogoPath from "../../assets/account.svg";
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
          <CardMainDivider />
          <CardImageContainer>
            <CardImage src={CardFrente} />
          </CardImageContainer>
          <CardPeopleContainer>
            <CardPeopleLogo src={UserLogoPath} />
            <CardPeopleText>1 Pessoa</CardPeopleText>
          </CardPeopleContainer>
          <CardSubDivider />
          <CardPriceContainer>
            <CardPriceText>R$:60,00</CardPriceText>
          </CardPriceContainer>
          <CardAmountButtonsContainer>
            <CardAmountButtons>
              <CardAmountButtonsTextMinus>-</CardAmountButtonsTextMinus>
            </CardAmountButtons>
            <CardAmountButtonsText>0</CardAmountButtonsText>
            <CardAmountButtons>
              <CardAmountButtonsText>+</CardAmountButtonsText>
            </CardAmountButtons>
          </CardAmountButtonsContainer>
        </CardContainer>
        <CardContainer>
          <CardTitleContainer>
            <CardTitleWraper>
              <CardTitle>Entrada</CardTitle>
              <CardSubtitle>Dia de Semana</CardSubtitle>
            </CardTitleWraper>
          </CardTitleContainer>
          <CardMainDivider />
          <CardImageContainer>
            <CardImage src={CardFrente} />
          </CardImageContainer>
          <CardPeopleContainer>
            <CardPeopleLogo src={UserLogoPath} />
            <CardPeopleText>1 Pessoa</CardPeopleText>
          </CardPeopleContainer>
          <CardSubDivider />
          <CardPriceContainer>
            <CardPriceText>R$:120,00</CardPriceText>
          </CardPriceContainer>
          <CardAmountButtonsContainer>
            <CardAmountButtons>
              <CardAmountButtonsTextMinus>-</CardAmountButtonsTextMinus>
            </CardAmountButtons>
            <CardAmountButtonsText>0</CardAmountButtonsText>
            <CardAmountButtons>
              <CardAmountButtonsText>+</CardAmountButtonsText>
            </CardAmountButtons>
          </CardAmountButtonsContainer>
        </CardContainer>
      </CardsWarper>
    </TicketContainer>
  );
};

export default Ticket;
