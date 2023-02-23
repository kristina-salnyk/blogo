import { useEffect, useState } from "react";
import {
  AddImageIconWrap,
  FormContainer,
  FormContent,
  Image,
  ImageWrap,
  InputLabel,
  Text,
} from "./PostForm.styled";
import { useDimensions } from "../../contexts/Dimensions";
import { useTheme } from "styled-components/native";
import Input from "../Input/Input";
import { InputWrap } from "../AuthForm/AuthForm.styled";
import Button from "../Button/Button";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import LocationIcon from "../icons/LocationIcon";
import AddImageIcon from "../icons/AddImageIcon";

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
    <FormContainer
      dimensions={dimensions}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <FormContent
        dimensions={dimensions}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <ScrollView style={{ flex: 1 }}>
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
              multiline={true}
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
              <InputLabel>
                <LocationIcon />
              </InputLabel>
            </InputWrap>
            <Button
              text="Publish"
              onPress={() => {
                console.log({ image, title, location });
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </FormContent>
    </FormContainer>
  );
};

export default PostForm;
