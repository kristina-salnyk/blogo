import { Container as ContainerStyled, Background } from "./Container.styled";

const bgImg = require("../../../assets/img/background.jpg");

const Container = ({ children }) => {
  return (
    <ContainerStyled>
      <Background source={bgImg}>{children}</Background>
    </ContainerStyled>
  );
};

export default Container;