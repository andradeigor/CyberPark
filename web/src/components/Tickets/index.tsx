import React, { useState } from "react";
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
  CardBuyButton,
  CardBuyButtonContainer,
  CardBuyButtonText,
  CardImageLado,
} from "./styled";

import CloudLeftPath from "../../assets/cloudleft.svg";
import CloudRightPath from "../../assets/cloudright.svg";
import CardFrente from "../../assets/CardFrente.png";
import CardLado from "../../assets/CardLado.png";
import UserLogoPath from "../../assets/account.svg";
const Ticket: React.FC = () => {
  const [halfConter, SetHalfConter] = useState<number>(0);
  const [Conter, SetConter] = useState<number>(0);
  const HanddleCounter = (operation: number) => {
    if (operation == -1 && Conter == 0) {
      return;
    }
    SetConter(Conter + operation);
  };
  const HanddleHalfCounter = (operation: number) => {
    if (operation == -1 && halfConter == 0) {
      return;
    }
    SetHalfConter(halfConter + operation);
  };
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
            <CardImageLado src={CardLado} />
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
              <CardAmountButtonsTextMinus
                onClick={() => HanddleHalfCounter(-1)}
              >
                -
              </CardAmountButtonsTextMinus>
            </CardAmountButtons>
            <CardAmountButtonsText>{halfConter}</CardAmountButtonsText>
            <CardAmountButtons>
              <CardAmountButtonsText onClick={() => HanddleHalfCounter(+1)}>
                +
              </CardAmountButtonsText>
            </CardAmountButtons>
          </CardAmountButtonsContainer>
          <CardBuyButtonContainer>
            <CardBuyButton>
              <CardBuyButtonText>Comprar</CardBuyButtonText>
            </CardBuyButton>
          </CardBuyButtonContainer>
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
            <CardImageLado src={CardLado} />
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
            <CardAmountButtons onClick={() => HanddleCounter(-1)}>
              <CardAmountButtonsTextMinus>-</CardAmountButtonsTextMinus>
            </CardAmountButtons>
            <CardAmountButtonsText>{Conter}</CardAmountButtonsText>
            <CardAmountButtons>
              <CardAmountButtonsText onClick={() => HanddleCounter(+1)}>
                +
              </CardAmountButtonsText>
            </CardAmountButtons>
          </CardAmountButtonsContainer>
          <CardBuyButtonContainer>
            <CardBuyButton>
              <CardBuyButtonText>Comprar</CardBuyButtonText>
            </CardBuyButton>
          </CardBuyButtonContainer>
        </CardContainer>
      </CardsWarper>
    </TicketContainer>
  );
};

export default Ticket;
