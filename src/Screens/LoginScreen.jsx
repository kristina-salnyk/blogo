import { View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} style={styles.img}>
        <Text>Login</Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
