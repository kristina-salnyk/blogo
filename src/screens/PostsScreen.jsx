import { useState } from "react";
import { FlatList } from "react-native";
import Post from "../components/Post/Post";
import { PostsContent } from "../components/PostsList/PostsList.styled";
import { Container } from "../components/Container/Container.styled";

const userImg = require("../../assets/img/default-user.png");
const postImg = require("../../assets/img/post.jpg");

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

  return (
    <Container>
      <PostsContent>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item) => item.id}
        />
      </PostsContent>
    </Container>
  );
};

export default PostsScreen;
