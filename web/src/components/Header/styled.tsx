import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  flex-direction: column;
`;
export const HeaderTitleContainer = styled.div`
  display: flex;
`;
export const HeaderTitleImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 900;
  font-size: 48px;
  line-height: 80%;
  margin-top: 10px;
`;

export const HeaderMenu = styled.nav`
  padding-top: 20px;
  width: 100%;
  height: 100%;
`;

export const HeaderUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderIl = styled.li`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 800;
  font-size: 16px;
  padding: 8px 16px 8px 16px;
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
  }
`;
