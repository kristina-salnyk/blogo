import { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import ImageIcon from "../../Components/ImageIcon";

const bgImg = require("../../../assets/images/background.jpg");
const userImg = require("../../../assets/images/default-user.png");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.bg}>
          <KeyboardAvoidingView
            style={styles.form}
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <View style={styles.profileImg}>
              <Image style={styles.img} source={userImg} />
              <ImageIcon />
            </View>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.fields}>
              <TextInput
                style={styles.input}
                value={login}
                placeholder="Login"
                onChangeText={(text) => setLogin(text)}
              />
              <TextInput
                style={styles.input}
                value={email}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
              />
              <View style={styles.field}>
                <TextInput
                  style={styles.input}
                  value={password}
                  placeholder="Password"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={isHidden}
                />
                <TouchableOpacity
                  style={styles.inputControl}
                  onPress={() => setIsHidden((prevState) => !prevState)}
                >
                  <Text>{isHidden ? "Show" : "Hide"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btn} onPress={() => {}}>
                <Text style={styles.btnTitle}>Register</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.link} onPress={() => {}}>
              <Text>Already have an account? Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
