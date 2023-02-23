import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import { ContentTitle } from "../../components/Container/Container.styled";
import {
  ControlText,
  Fields,
  InputControl,
  InputWrap,
} from "../../components/AuthForm/AuthForm.styled";
import BackgroundContainer from "../../components/Container/BackgroundContainer";
import AuthForm from "../../components/AuthForm/AuthForm";
import AuthFormContent from "../../components/AuthForm/AuthFormContent";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const theme = useTheme();

  const onLogin = () => {
    const data = { email, password };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundContainer>
        <AuthForm
          style={{
            paddingTop: theme.spacing[2],
          }}
        >
          <AuthFormContent>
            <ContentTitle>Login</ContentTitle>
            <Fields>
              <Input
                value={email}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
              />
              <InputWrap>
                <Input
                  value={password}
                  placeholder="Password"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={isHidden}
                />
                <InputControl
                  onPress={() => setIsHidden((prevState) => !prevState)}
                >
                  <ControlText>{isHidden ? "Show" : "Hide"}</ControlText>
                </InputControl>
              </InputWrap>
              <Button text="Login" onPress={onLogin} />
            </Fields>
            <Link
              text="Don't have an account? Register"
              onPress={() => navigation.navigate("Registration")}
            />
          </AuthFormContent>
        </AuthForm>
      </BackgroundContainer>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
