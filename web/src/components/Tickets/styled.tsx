import styled from "styled-components";

export const TicketContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const CloudImgLeft = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  left: 0;
  right: 0;
`;

export const CloudImgRight = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  right: 0;
`;

export const CardsWarper = styled.section`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  gap: 60px;
  right: 50%;
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardTitleWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  margin-top: 20px;
  font-size: 36px;
  font-weight: 900;
  color: #ffffff;
  text-shadow: rgba(255, 255, 255, 0.35) 1.95px 1.95px 2.6px;
`;

export const CardSubtitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  font-weight: 400;
  text-shadow: rgba(255, 255, 255, 0.35) 1.95px 1.95px 2.6px;
`;

export const CardMainDivider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #606060;
  margin-top: 16px;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-top: 20px;
  border: 5px solid #606060;
  transition: all 0.3s ease-out;
`;
export const CardImageLado = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-top: 20px;
  border: 5px solid #606060;
  transition: all 0.3s ease-out;
  display: none;
`;
export const CardContainer = styled.div`
  width: 320px;
  height: 550px;
  background-color: #303030;
  border-radius: 20px;
  box-shadow: rgba(9, 25, 51, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.3s ease-out;
  overflow: hidden;
  :hover {
    height: 630px;
    ${CardImage} {
      display: none;
    }
    ${CardImageLado} {
      display: block;
    }
  }
`;
export const CardPeopleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardPeopleLogo = styled.img`
  width: 20px;
  height: 20px;
`;
export const CardPeopleText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  margin-left: 5px;
`;
export const CardSubDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #606060;
  margin-top: 16px;
`;

export const CardPriceContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardPriceText = styled.p`
  font-weight: 800;
  font-size: 32px;
  color: #ffffff;
  margin-left: 5px;
`;

export const CardAmountButtonsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardAmountButtons = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: #606060;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CardAmountButtonsText = styled.p`
  font-weight: 800;
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 2px;
`;
export const CardAmountButtonsTextMinus = styled.p`
  font-weight: 800;
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const CardBuyButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const CardBuyButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: #606060;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CardBuyButtonText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
`;
