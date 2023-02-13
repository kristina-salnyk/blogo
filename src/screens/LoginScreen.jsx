import { useEffect, useState } from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import {
  Background,
  Container,
} from "../components/Container/Container.styled";
import {
  FormContent,
  Form,
  Fields,
  FieldWrap,
  FieldControl,
  Title,
  ControlText,
} from "../components/Form/Form.styled";

const bgImg = require("../../assets/img/background.jpg");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

  const onLogin = () => {
    const data = { email, password };
    console.log(data);

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Home" }],
    // });
    // navigation.navigate("Home", {
    //   screen: "Posts",
    // });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Background source={bgImg}>
          <Form
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
              <Title>Login</Title>
              <Fields>
                <Field
                  value={email}
                  placeholder="E-mail"
                  onChangeText={(text) => setEmail(text)}
                />
                <FieldWrap>
                  <Field
                    value={password}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={isHidden}
                  />
                  <FieldControl
                    os={Platform.OS}
                    onPress={() => setIsHidden((prevState) => !prevState)}
                  >
                    <ControlText>{isHidden ? "Show" : "Hide"}</ControlText>
                  </FieldControl>
                </FieldWrap>
                <Button text="Login" onPress={onLogin} />
              </Fields>
              <Link
                text="Don't have an account? Register"
                onPress={() => navigation.navigate("Registration")}
              />
            </FormContent>
          </Form>
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
