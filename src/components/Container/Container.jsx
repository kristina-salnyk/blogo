import { Container as ContainerStyled } from "./Container.styled";

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
