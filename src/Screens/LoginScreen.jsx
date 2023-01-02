import { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import commonStyles from "../styles/common-styles";
import formStyles from "../styles/form-styles";

const bgImg = require("../../assets/images/background.jpg");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={commonStyles.container}>
        <ImageBackground source={bgImg} style={commonStyles.bg}>
          <KeyboardAvoidingView
            style={formStyles.form}
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <Text style={commonStyles.title}>Login</Text>
            <View style={formStyles.fields}>
              <TextInput
                style={formStyles.input}
                value={email}
                placeholder="E-mail"
                mode="outlined"
                outlineColor="#cccbc8"
                activeOutlineColor="#FF6C00"
                onChangeText={(text) => setEmail(text)}
              />
              <View style={formStyles.field}>
                <TextInput
                  style={formStyles.input}
                  value={password}
                  placeholder="Password"
                  mode="outlined"
                  outlineColor="#cccbc8"
                  activeOutlineColor="#FF6C00"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={isHidden}
                />
                <TouchableOpacity
                  style={formStyles.inputControl}
                  onPress={() => setIsHidden((prevState) => !prevState)}
                >
                  <Text>{isHidden ? "Show" : "Hide"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={formStyles.btn} onPress={() => {}}>
                <Text style={formStyles.btnTitle}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={commonStyles.link} onPress={() => {}}>
              <Text>Don't have an account? Register</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
