import { useEffect, useState } from "react";
import {
  ImageWrap,
  Form,
  Image,
  AddImageIconWrap,
  Text,
  InputLabel,
} from "./PostForm.styled";
import { useDimensions } from "../../contexts/Dimensions";
import AddImageIcon from "../icons/AddImageIcon";
import { useTheme } from "styled-components/native";
import Input from "../Input/Input";
import {
  ControlText,
  InputControl,
  InputWrap,
} from "../AuthForm/AuthForm.styled";
import Button from "../Button/Button";
import { Platform, TouchableOpacity } from "react-native";
import LogoutIcon from "../icons/LogoutIcon";
import LocationIcon from "../icons/LocationIcon";

const postImg = require("../../../assets/img/post.jpg");
const defaultPostImg = require("../../../assets/img/default-post.png");

const PostForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const { dimensions } = useDimensions();
  const theme = useTheme();

  useEffect(() => {
    setImage(postImg);
  }, []);

  return (
    <Form dimensions={dimensions}>
      <ImageWrap>
        <Image source={image ?? defaultPostImg} />
        <AddImageIconWrap>
          <AddImageIcon
            opacity={image ? 0.3 : 1}
            fill={image ? theme.colors.white : theme.colors.border}
          />
        </AddImageIconWrap>
      </ImageWrap>
      <Text>Upload photo</Text>
      <Input
        mode="flat"
        value={title}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        style={{ backgroundColor: theme.colors.white }}
      />
      <InputWrap>
        <Input
          mode="flat"
          value={location}
          placeholder="Location"
          onChangeText={(text) => setLocation(text)}
          style={{
            backgroundColor: theme.colors.white,
            paddingLeft: theme.spacing[2],
          }}
        />
        <InputLabel os={Platform.OS}>
          <LocationIcon />
        </InputLabel>
      </InputWrap>
      <Button
        text="Publish"
        onPress={() => {
          console.log({ image, title, location });
        }}
      />
      <TouchableOpacity></TouchableOpacity>
    </Form>
  );
};

export default PostForm;
