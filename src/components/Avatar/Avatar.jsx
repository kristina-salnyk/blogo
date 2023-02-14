import userImg from "../../../assets/img/default-user.png";
import { ImageWrap, Image, AddImageIcon } from "./Avatar.styled";

const Avatar = () => {
  return (
    <ImageWrap>
      <Image source={userImg} />
      <AddImageIcon />
    </ImageWrap>
  );
};

export default Avatar;
