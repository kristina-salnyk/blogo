import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./src/utils/route";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme.js";
import { DimensionsProvider } from "./src/contexts/Dimensions";
import { RouteProvider } from "./src/contexts/Route";

export default function App() {
  const route = useRoute(true);

  return (
    <ThemeProvider theme={theme}>
      <DimensionsProvider>
        <RouteProvider>
          <NavigationContainer>{route}</NavigationContainer>
        </RouteProvider>
      </DimensionsProvider>
    </ThemeProvider>
  );
}
