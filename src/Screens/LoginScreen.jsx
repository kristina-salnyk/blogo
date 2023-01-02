import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import commonStyles from "../styles/common";
import formStyles from "../styles/form";

const bgImg = require("../../assets/images/background.jpg");

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
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
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
      <View style={commonStyles.container}>
        <ImageBackground source={bgImg} style={commonStyles.bg}>
          <KeyboardAvoidingView
            style={{
              ...formStyles.form,
              flex: dimensions >= 500 ? 0.8 : 0.6,
              ...(dimensions >= 500 ? { marginHorizontal: 64 } : null),
            }}
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <ScrollView
              style={formStyles.fieldsContainer}
              contentContainerStyle={{
                alignItems: "center",
                ...(dimensions >= 500 && Platform.OS === "ios"
                  ? { paddingBottom: 32 }
                  : null),
              }}
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
                <TouchableOpacity style={formStyles.btn} onPress={onLogin}>
                  <Text style={formStyles.btnTitle}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={commonStyles.link}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text>Don't have an account? Register</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
