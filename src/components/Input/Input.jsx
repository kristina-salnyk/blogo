import { useTheme } from "styled-components/native";
import { Input as InputStyled } from "./Input.styled";

const Input = (props) => {
  const theme = useTheme();

  return (
    <InputStyled
      mode="outlined"
      outlineColor={theme.colors.outline}
      activeOutlineColor={theme.colors.main}
      activeUnderlineColor={theme.colors.main}
      placeholderTextColor={theme.colors.text.placeholder}
      {...props}
    />
  );
};

export default Input;
