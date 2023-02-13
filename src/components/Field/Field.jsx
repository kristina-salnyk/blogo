import { useTheme } from "styled-components/native";
import { Field as FieldStyled } from "./Field.styled";

const Field = (props) => {
  const theme = useTheme();

  return (
    <FieldStyled
      mode="outlined"
      outlineColor={theme.colors.outline}
      activeOutlineColor={theme.colors.main}
      placeholderTextColor={theme.colors.text.placeholder}
      {...props}
    />
  );
};

export default Field;
