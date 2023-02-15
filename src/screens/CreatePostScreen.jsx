import { useEffect } from "react";
import { useRoute } from "../contexts/Route";
import {
  Container,
  ContentWrap,
} from "../components/Container/Container.styled";
import PostForm from "../components/PostForm/PostForm";

const CreatePostScreen = ({ navigation }) => {
  const { setCurrentRouteName } = useRoute();

  useEffect(() => {
    return () => {
      setCurrentRouteName("");
    };
  }, []);

  return (
    <Container>
      <ContentWrap>
        <PostForm />
      </ContentWrap>
    </Container>
  );
};

export default CreatePostScreen;
