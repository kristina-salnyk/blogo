import { Button as ButtonStyled, Text } from "./Button.styled";

const Button = ({ text, onPress }) => {
  return (
    <ButtonStyled onPress={onPress} style={{ elevation: 3 }}>
      <Text>{text}</Text>
    </ButtonStyled>
  );
};

export default Button;
