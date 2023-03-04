import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
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
    id: 0,
    name: "Maksim",
    email: "maksim@example.com",
    avatar: userImg,
    image: Image.resolveAssetSource(postImg).uri,
    title: "My cake is on the keyboard",
    comments: 1,
    likes: 0,
    locationString: "Kyiv",
  },
  {
    id: 1,
    name: "Natali Romanova",
    email: "email@example.com",
    avatar: userImg,
    image: Image.resolveAssetSource(postImg).uri,
    title: "Forest",
    comments: 124,
    likes: 1140,
    locationString: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    name: "Ivan Savchenko",
    email: "ivan@example.com",
    avatar: userImg,
    image: Image.resolveAssetSource(postImg).uri,
    title: "Rest",
    comments: 13,
    likes: 2,
    locationString: "Ukraine",
  },
  {
    id: 3,
    name: "Natalia Salnyk",
    email: "nata@example.com",
    avatar: userImg,
    image: Image.resolveAssetSource(postImg).uri,
    title: "My favorite photo",
    comments: 1,
    likes: 0,
    locationString: "Sumy",
  },
];

const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState(initPosts);

  const { dimensions } = useDimensions();

  useEffect(() => {
    const data = route.params?.post;
    if (!data) return;

    setPosts((prevState) => {
      return [
        {
          id: 4,
          name: "Natalia Salnyk",
          email: "nata@example.com",
          avatar: userImg,
          comments: 1,
          likes: 0,
          ...data,
        },
        ...prevState,
      ];
    });

    return () => {};
  }, [route.params]);

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
