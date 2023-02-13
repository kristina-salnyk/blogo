import { Link as LinkStyled, Text } from "./Link.styled";

const Link = ({ text, onPress }) => {
  return (
    <LinkStyled onPress={onPress}>
      <Text>{text}</Text>
    </LinkStyled>
  );
};

export default Link;
