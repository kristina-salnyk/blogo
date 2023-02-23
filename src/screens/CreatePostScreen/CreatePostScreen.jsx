import { useEffect } from "react";
import { useRoute } from "../../contexts/Route";
import PostForm from "../../components/PostForm/PostForm";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Container from "../../components/Container/Container";
import DeletePostsIcon from "../../components/icons/DeletePostsIcon";
import { ControlPanel } from "./CreatePostScreen.styled";

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
          <TouchableOpacity onPress={() => {}}>
            <DeletePostsIcon />
          </TouchableOpacity>
        </ControlPanel>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;
