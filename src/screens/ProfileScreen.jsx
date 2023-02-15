import { useState } from "react";
import { ScrollView, View } from "react-native";
import Post from "../components/Post/Post";
import Avatar from "../components/Avatar/Avatar";
import Container from "../components/Container/Container";
import LogoutIcon from "../components/icons/LogoutIcon";
import {
  ContentWrap,
  ContentTitle,
} from "../components/Container/Container.styled";
import { LogoutControl, Profile } from "../components/Profile/Profile.styled";

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

  return (
    <Container>
      <ContentWrap>
        <ScrollView>
          <View style={{ paddingVertical: 70 }} />
          <Profile>
            <LogoutControl onPress={() => {}}>
              <LogoutIcon />
            </LogoutControl>
            <Avatar />
            <ContentTitle>Natali Romanova</ContentTitle>
            <View>
              {posts.map((item) => (
                <Post key={item.id} {...item} />
              ))}
            </View>
          </Profile>
        </ScrollView>
      </ContentWrap>
    </Container>
  );
};

export default ProfileScreen;
