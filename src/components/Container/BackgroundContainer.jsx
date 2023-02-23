import { Background, Container as ContainerStyled } from "./Container.styled";

const bgImg = require("../../../assets/img/background.jpg");

const BackgroundContainer = ({ children }) => {
  return (
    <ContainerStyled>
      <Background source={bgImg}>{children}</Background>
    </ContainerStyled>
  );
};

export default BackgroundContainer;
