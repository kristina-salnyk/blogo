import { Platform } from "react-native";
import { FormContainer } from "./AuthForm.styled";
import { useDimensions } from "../../contexts/Dimensions";

const AuthForm = ({ children, ...props }) => {
  const { dimensions } = useDimensions();

  return (
    <FormContainer
      dimensions={dimensions}
      behavior={Platform.OS === "ios" ? "padding" : null}
      {...props}
    >
      {children}
    </FormContainer>
  );
};

export default AuthForm;
