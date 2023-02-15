import userImg from "../../../assets/img/default-user.png";
import { ImageWrap, Image, AddIconStyled } from "./Avatar.styled";

const Avatar = () => {
  return (
    <ImageWrap>
      <Image source={userImg} />
      <AddIconStyled />
    </ImageWrap>
  );
};

export default Avatar;
