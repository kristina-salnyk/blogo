import { Image, ImageWrap, Icon } from "./Avatar.styled";

const userImg = require("../../../assets/images/default-user.png");

const Avatar = () => {
  return (
    <ImageWrap>
      <Image source={userImg} />
      <Icon />
    </ImageWrap>
  );
};

export default Avatar;
