import { useState, useEffect } from "react";
import {
  Text,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar/Avatar";
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
  Heading,
} from "../components/Form/Form.styled";
import { Link } from "../components/Link/Link.styled";

const bgImg = require("../../assets/images/background.jpg");

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
      console.log(width);
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
            <Avatar />
            <FormContent
              dimensions={dimensions}
              os={Platform.OS}
              contentContainerStyle={{
                alignItems: "center",
              }}
            >
              <Heading>Registration</Heading>
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
                    <Text>{isHidden ? "Show" : "Hide"}</Text>
                  </FieldControl>
                </FieldWrap>
                <Button text="Register" onPress={onRegister} />
              </Fields>
              <Link onPress={() => navigation.navigate("Login")}>
                <Text>Already have an account? Login</Text>
              </Link>
            </FormContent>
          </Form>
        </Background>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
