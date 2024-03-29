import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";

const AuthStack = createStackNavigator();

const Auth = ({ navigation }) => {
  return (
    <AuthStack.Navigator initialRouteName="Registration">
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
