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
export const CardContainer = styled.div`
  width: 320px;
  height: 550px;
  background-color: #303030;
  border-radius: 20px;
  box-shadow: rgba(9, 25, 51, 0.15) 1.95px 1.95px 2.6px;
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
  background: -webkit-radial-gradient(
    rgba(250, 250, 250, 1),
    rgba(234, 1, 217, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: rgba(255, 255, 255, 0.35) 1.95px 1.95px 2.6px;
`;

export const CardSubtitle = styled.h3`
  font-size: 24px;
  background: -webkit-radial-gradient(
    rgba(250, 250, 250, 1),
    rgba(234, 1, 217, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  text-shadow: rgba(255, 255, 255, 0.35) 1.95px 1.95px 2.6px;
`;
