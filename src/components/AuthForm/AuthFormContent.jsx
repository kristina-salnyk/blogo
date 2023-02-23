import { FormContent } from "./AuthForm.styled";
import { useDimensions } from "../../contexts/Dimensions";

const AuthFormContent = ({ children, ...props }) => {
  const { dimensions } = useDimensions();

  return (
    <FormContent
      dimensions={dimensions}
      contentContainerStyle={{
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </FormContent>
  );
};

export default AuthFormContent;
