import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { Provider } from "react-redux";
import { useRoute } from "./src/hooks/useRoute";
import { DimensionsProvider } from "./src/contexts/Dimensions";
import { RouteProvider } from "./src/contexts/Route";
import theme from "./src/theme";
import store from "./src/redux/store";
import db from "firebase";

export default function App() {
  const [user, setUser] = useState(false);
  const route = useRoute(user);

  db.auth().onAuthStateChanged((user) => setUser(user));

  if (user === false) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <DimensionsProvider>
        <RouteProvider>
          <Provider store={store}>
            <NavigationContainer>{route}</NavigationContainer>
          </Provider>
        </RouteProvider>
      </DimensionsProvider>
    </ThemeProvider>
  );
}
