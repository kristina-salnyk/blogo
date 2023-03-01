import { useEffect, useState } from "react";
import {
  AddImageIconWrap,
  FormContainer,
  FormContent,
  ImageStyled,
  ImageWrap,
  InputLabel,
  Text,
} from "./PostForm.styled";
import { useDimensions } from "../../contexts/Dimensions";
import { useTheme } from "styled-components/native";
import Input from "../Input/Input";
import { InputWrap } from "../AuthForm/AuthForm.styled";
import Button from "../Button/Button";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import LocationIcon from "../icons/LocationIcon";
import AddImageIcon from "../icons/AddImageIcon";
import { Camera as MediaLibrary, Camera } from "expo-camera";

const defaultPostImgPath = "../../../assets/img/default-post.png";

const PostForm = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoURI, setPhotoURI] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const { dimensions } = useDimensions();
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    setPhotoURI(hasPermission ? "" : defaultPostImgPath);
  }, [hasPermission]);

  const takePhoto = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPhotoURI(photo.uri);
  };

  const retakePhoto = async () => {
    setPhotoURI(null);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
              <>
                <View>
                  {photoURI ? (
                    <ImageStyled source={{ uri: photoURI }} />
                  ) : (
                    <Camera
                      ref={(ref) => {
                        setCamera(ref);
                      }}
                      type={type}
                      style={{
                        height: Platform.OS === "ios" ? 250 : 350,
                        width: "100%",
                      }}
                      ratio="1:1"
                    ></Camera>
                  )}
                </View>
                <AddImageIconWrap onPress={photoURI ? retakePhoto : takePhoto}>
                  <AddImageIcon
                    opacity={photoURI ? 0.3 : 1}
                    fill={photoURI ? theme.colors.white : theme.colors.border}
                  />
                </AddImageIconWrap>
              </>
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
                console.log({ photoURI, title, location });
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </FormContent>
    </FormContainer>
  );
};

export default PostForm;
