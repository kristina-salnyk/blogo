import { Text } from "react-native";
import { useEffect } from "react";
import { useRoute } from "../contexts/Route";

const CreatePostScreen = ({ navigation }) => {
  const { setCurrentRouteName } = useRoute();

  useEffect(() => {
    return () => {
      setCurrentRouteName("");
    };
  }, []);

  return <Text>Create posts screen</Text>;
};

export default CreatePostScreen;
