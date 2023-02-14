import { useState, useEffect } from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Container from "../components/Container/Container";
import Avatar from "../components/Avatar/Avatar";
import { Title } from "../components/Container/Container.styled";
import {
  FormContent,
  Form,
  Fields,
  InputWrap,
  InputControl,
  ControlText,
} from "../components/Form/Form.styled";

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
  }, []);

  const onRegister = () => {
    const data = { name, email, password };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
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
            <Title>Registration</Title>
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
                  os={Platform.OS}
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
          </FormContent>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
