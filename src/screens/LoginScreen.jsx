import { useState, useEffect } from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useTheme } from "styled-components/native";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Container from "../components/Container/Container";
import { ContentTitle } from "../components/Container/Container.styled";
import {
  FormContent,
  Form,
  Fields,
  InputWrap,
  InputControl,
  ControlText,
} from "../components/AuthForm/AuthForm.styled";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const theme = useTheme();

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
  }, []);

  const onLogin = () => {
    const data = { email, password };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Form
          style={{
            paddingTop: theme.spacing[2],
          }}
          os={Platform.OS}
          dimensions={dimensions}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <FormContent
            dimensions={dimensions}
            os={Platform.OS}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
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
                  os={Platform.OS}
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
          </FormContent>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
