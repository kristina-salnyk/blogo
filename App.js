import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./src/utils/route";

export default function App() {
  const route = useRoute(false);

  return <NavigationContainer>{route}</NavigationContainer>;
}
