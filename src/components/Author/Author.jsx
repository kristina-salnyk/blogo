import { View } from "react-native";
import { Container, ImageWrap, Image, SubTitle, Title } from "./Author.styled";

const Author = ({ avatar, name, email }) => {
  return (
    <Container>
      <ImageWrap>
        <Image source={avatar} />
      </ImageWrap>
      <View>
        <Title>{name}</Title>
        <SubTitle>{email}</SubTitle>
      </View>
    </Container>
  );
};

export default Author;
