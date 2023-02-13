import { Platform } from "react-native";
import { Button as ButtonStyled, Text } from "./Button.styled";

const Button = ({ text, onPress }) => {
  return (
    <ButtonStyled os={Platform.OS} onPress={onPress} style={{ elevation: 3 }}>
      <Text>{text}</Text>
    </ButtonStyled>
  );
};

export default Button;
