import { useState } from "react";
import { Image, View } from "react-native";
import Post from "../../components/Post/Post";
import Avatar from "../../components/Avatar/Avatar";
import LogoutIcon from "../../components/icons/LogoutIcon";
import {
  ContentTitle,
  ScreenContainer,
} from "../../components/Container/Container.styled";
import BackgroundContainer from "../../components/Container/BackgroundContainer";
import {
  LogoutControl,
  ProfileContent,
  ProfileContentWrap,
  TopArea,
} from "./ProfileScreen.styled";
import { useDimensions } from "../../contexts/Dimensions";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";

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

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(initPosts);

  const name = useSelector(selectName);

  const { dimensions } = useDimensions();

  const handleOpenMap = (location, locationString) => {
    if (!location) return;

    navigation.navigate("Map", {
      params: { location, locationString },
    });
  };

  return (
    <BackgroundContainer>
      <ScreenContainer>
        <ProfileContentWrap dimensions={dimensions}>
          <TopArea dimensions={dimensions} />
          <ProfileContent>
            <LogoutControl onPress={() => {}}>
              <LogoutIcon />
            </LogoutControl>
            <Avatar />
            <ContentTitle>{name}</ContentTitle>
            <View>
              {posts.map((item) => (
                <Post onOpenMap={handleOpenMap} key={item.id} {...item} />
              ))}
            </View>
          </ProfileContent>
        </ProfileContentWrap>
      </ScreenContainer>
    </BackgroundContainer>
  );
};

export default ProfileScreen;
