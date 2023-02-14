import CommentsIcon from "../icons/CommentsIcon";
import LocationIcon from "../icons/LocationIcon";
import LikeIcon from "../icons/LikeIcon";
import {
  ImageWrap,
  Image,
  Container,
  Text,
  PostFooter,
  Group,
  Label,
  Link,
} from "./Post.styled";

const Post = ({ header, image, text, comments, likes, location }) => {
  return (
    <Container>
      {header}
      <ImageWrap>
        <Image source={image} />
      </ImageWrap>
      <Text>{text}</Text>
      <PostFooter>
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
      </PostFooter>
    </Container>
  );
};

export default Post;
