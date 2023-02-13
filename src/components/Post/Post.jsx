import { View } from "react-native";
import CommentsIcon from "../icons/CommentsIcon";
import LocationIcon from "../icons/LocationIcon";
import LikeIcon from "../icons/LikeIcon";
import {
  Header,
  ImageWrap,
  PostContent,
  SubTitle,
  Title,
  Image,
  AvatarWrap,
  Text,
  Footer,
  Group,
  Label,
  Link,
} from "./Post.styled";
import { Avatar } from "../Container/Container.styled";

const Post = ({
  id,
  name,
  email,
  avatar,
  image,
  text,
  comments,
  likes,
  location,
}) => {
  return (
    <PostContent>
      <Header>
        <AvatarWrap>
          <Avatar source={avatar} />
        </AvatarWrap>
        <View>
          <Title>{name}</Title>
          <SubTitle>{email}</SubTitle>
        </View>
      </Header>
      <ImageWrap>
        <Image source={image} />
      </ImageWrap>
      <Text>{text}</Text>
      <Footer>
        <Group>
          <Group>
            <CommentsIcon />
            <Label>{comments}</Label>
          </Group>
          <Group>
            <LikeIcon />
            <Label>{likes}</Label>
          </Group>
        </Group>
        <Group>
          <LocationIcon />
          <Link>{location}</Link>
        </Group>
      </Footer>
    </PostContent>
  );
};

export default Post;
