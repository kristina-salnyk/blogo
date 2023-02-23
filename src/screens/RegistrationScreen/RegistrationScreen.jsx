import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import Avatar from "../../components/Avatar/Avatar";
import { ContentTitle } from "../../components/Container/Container.styled";
import {
  ControlText,
  Fields,
  InputControl,
  InputWrap,
} from "../../components/AuthForm/AuthForm.styled";
import AuthForm from "../../components/AuthForm/AuthForm";
import BackgroundContainer from "../../components/Container/BackgroundContainer";
import AuthFormContent from "../../components/AuthForm/AuthFormContent";
import { useTheme } from "styled-components/native";

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const theme = useTheme();

  const onRegister = () => {
    const data = { name, email, password };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundContainer>
        <AuthForm
          style={{
            paddingTop: theme.spacing[4],
            flex: 0.7,
          }}
        >
          <Avatar />
          <AuthFormContent>
            <ContentTitle>Registration</ContentTitle>
            <Fields>
              <Input
                value={name}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
              />
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
              <Button text="Register" onPress={onRegister} />
            </Fields>
            <Link
              text="Already have an account? Login"
              onPress={() => navigation.navigate("Login")}
            />
          </AuthFormContent>
        </AuthForm>
      </BackgroundContainer>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
