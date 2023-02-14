import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./src/utils/route";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme.js";

export default function App() {
  const route = useRoute(true);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{route}</NavigationContainer>
    </ThemeProvider>
  );
}
