import CommentsIcon from "../icons/CommentsIcon";
import LocationIcon from "../icons/LocationIcon";
import LikeIcon from "../icons/LikeIcon";
import {
  Container,
  Group,
  Image,
  ImageWrap,
  Label,
  Link,
  PostFooter,
  Text,
} from "./Post.styled";

const Post = ({
  header,
  image,
  title,
  comments,
  likes,
  location,
  locationString,
}) => {
  return (
    <Container>
      {header}
      <ImageWrap>
        <Image source={{ uri: image }} />
      </ImageWrap>
      <Text>{title}</Text>
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
          <Link>{locationString}</Link>
        </Group>
      </PostFooter>
    </Container>
  );
};

export default Post;
