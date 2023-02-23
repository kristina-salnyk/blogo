import { useEffect } from "react";
import { useRoute } from "../../contexts/Route";
import PostForm from "../../components/PostForm/PostForm";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Container from "../../components/Container/Container";
import DeletePostsIcon from "../../components/icons/DeletePostsIcon";
import { ControlPanel, PostControl } from "./CreatePostScreen.styled";

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
        <ControlPanel>
          <PostControl onPress={() => {}}>
            <DeletePostsIcon />
          </PostControl>
        </ControlPanel>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;
