import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaderTitleImage,
  HeaderTitle,
  HeaderMenu,
  HeaderUl,
  HeaderIl,
} from "./styled";
import LogoPath from "../../assets/logo.png";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitleImage src={LogoPath} />
      </HeaderTitleContainer>
      <HeaderMenu>
        <HeaderUl>
          <HeaderIl>Home</HeaderIl>
          <HeaderIl>Parque</HeaderIl>
          <HeaderIl>Atrações</HeaderIl>
          <HeaderIl>Eventos</HeaderIl>
          <HeaderIl>Calendário</HeaderIl>
          <HeaderIl>Contato</HeaderIl>
        </HeaderUl>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
