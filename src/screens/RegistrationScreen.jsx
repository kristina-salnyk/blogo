import { useState, useEffect } from "react";
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
  Avatar,
} from "../components/Container/Container.styled";
import {
  FormContent,
  Form,
  Fields,
  FieldWrap,
  FieldControl,
  Title,
  ControlText,
  Icon,
  AvatarWrap,
} from "../components/Form/Form.styled";

const bgImg = require("../../assets/img/background.jpg");
const userImg = require("../../assets/img/default-user.png");

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
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

  const onRegister = () => {
    const data = { name, email, password };
    console.log(data);

    // navigation.reset({
    //   index: 1,
    //   actions: [navigation.navigate({ routeName: "Home" })],
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
            style={{
              paddingTop: 86,
              flex: 0.7,
            }}
            os={Platform.OS}
            dimensions={dimensions}
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <AvatarWrap>
              <Avatar source={userImg} />
              <Icon />
            </AvatarWrap>
            <FormContent
              dimensions={dimensions}
              os={Platform.OS}
              contentContainerStyle={{
                alignItems: "center",
              }}
            >
              <Title>Registration</Title>
              <Fields>
                <Field
                  value={name}
                  placeholder="Name"
                  onChangeText={(text) => setName(text)}
                />
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
                <Button text="Register" onPress={onRegister} />
              </Fields>
              <Link
                text="Already have an account? Login"
                onPress={() => navigation.navigate("Login")}
              />
            </FormContent>
          </Form>
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
