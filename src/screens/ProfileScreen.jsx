import { useEffect, useState } from "react";
import { Dimensions, FlatList, Platform } from "react-native";
import Post from "../components/Post/Post";
import { PostsContent } from "../components/PostsList/PostsList.styled";
import {
  Avatar,
  Background,
  Container,
} from "../components/Container/Container.styled";
import bgImg from "../../assets/img/background.jpg";
import { Profile } from "../components/Profile/Profile.styled";
import { AvatarWrap, Icon } from "../components/Form/Form.styled";

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

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(initPosts);

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

  return (
    <Container>
      <Background source={bgImg}>
        <Profile
          style={{
            paddingTop: 86,
          }}
          os={Platform.OS}
          dimensions={dimensions}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <PostsContent>
            <FlatList
              data={posts}
              renderItem={({ item }) => <Post {...item} />}
              keyExtractor={(item) => item.id}
            >
              <AvatarWrap>
                <Avatar source={userImg} />
                <Icon />
              </AvatarWrap>
            </FlatList>
          </PostsContent>
        </Profile>
      </Background>
    </Container>
  );
};

export default ProfileScreen;
