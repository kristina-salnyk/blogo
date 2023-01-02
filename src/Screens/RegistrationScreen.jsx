import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import commonStyles from "../styles/common";
import formStyles from "../styles/form";
import AddIcon from "../components/icons/AddIcon";

const bgImg = require("../../assets/images/background.jpg");
const userImg = require("../../assets/images/default-user.png");

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
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
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
      <View style={commonStyles.container}>
        <ImageBackground source={bgImg} style={commonStyles.bg}>
          <KeyboardAvoidingView
            style={{
              ...formStyles.form,
              ...formStyles.registerForm,
              ...(dimensions >= 500 ? { marginHorizontal: 64 } : null),
            }}
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <View style={commonStyles.profileImg}>
              <Image style={commonStyles.img} source={userImg} />
              <AddIcon style={commonStyles.icon} />
            </View>
            <ScrollView
              style={formStyles.fieldsContainer}
              contentContainerStyle={{
                alignItems: "center",
                ...(dimensions >= 500 && Platform.OS === "ios"
                  ? { paddingBottom: 32 }
                  : null),
              }}
            >
              <Text style={commonStyles.title}>Registration</Text>
              <View style={formStyles.fields}>
                <TextInput
                  style={formStyles.input}
                  value={name}
                  placeholder="Name"
                  mode="outlined"
                  outlineColor="#cccbc8"
                  activeOutlineColor="#FF6C00"
                  onChangeText={(text) => setName(text)}
                />
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
                <TouchableOpacity style={formStyles.btn} onPress={onRegister}>
                  <Text style={formStyles.btnTitle}>Register</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={commonStyles.link}
                onPress={() => navigation.navigate("Login")}
              >
                <Text>Already have an account? Login</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
