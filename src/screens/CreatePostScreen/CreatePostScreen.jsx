import { useEffect } from "react";
import { useRoute } from "../../contexts/Route";
import PostForm from "../../components/PostForm/PostForm";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Container from "../../components/Container/Container";

const CreatePostScreen = ({ navigation }) => {
  const { setCurrentRouteName } = useRoute();

  useEffect(() => {
    return () => {
      setCurrentRouteName("");
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <PostForm />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;
