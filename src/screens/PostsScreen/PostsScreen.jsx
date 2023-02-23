import { useState } from "react";
import { FlatList } from "react-native";
import Post from "../../components/Post/Post";
import Author from "../../components/Author/Author";
import Container from "../../components/Container/Container";
import { ScreenContainer } from "../../components/Container/Container.styled";
import { useDimensions } from "../../contexts/Dimensions";
import { PostsContentWrap } from "../../components/Posts/Posts.styled";

const userImg = require("../../../assets/img/default-user.png");
const postImg = require("../../../assets/img/post.jpg");

const initPosts = [
  {
    id: 1,
    name: "Natali Romanova",
    email: "email@example.com",
    avatar: userImg,
    image: postImg,
    text: "Forest",
    comments: 124,
    likes: 1140,
    location: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    name: "Ivan Savchenko",
    email: "ivan@example.com",
    avatar: userImg,
    image: postImg,
    text: "Rest",
    comments: 13,
    likes: 2,
    location: "Ukraine",
  },
  {
    id: 3,
    name: "Natalia Salnyk",
    email: "nata@example.com",
    avatar: userImg,
    image: postImg,
    text: "My favorite photo",
    comments: 1,
    likes: 0,
    location: "Sumy",
  },
];

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(initPosts);

  const { dimensions } = useDimensions();

  return (
    <Container>
      <ScreenContainer>
        <PostsContentWrap dimensions={dimensions}>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <Post header={<Author {...item} />} {...item}></Post>
            )}
            keyExtractor={(item) => item.id}
          />
        </PostsContentWrap>
      </ScreenContainer>
    </Container>
  );
};

export default PostsScreen;
