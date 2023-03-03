import { useEffect, useState } from "react";
import {
  AddImageIconWrap,
  FormContainer,
  FormContent,
  ImageContainer,
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
import * as Location from "expo-location";

const defaultPostImgPath = "../../../assets/img/default-post.png";

const PostForm = ({ onSubmit }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [locationString, setLocationString] = useState("");

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
    setImage(hasPermission ? "" : defaultPostImgPath);
  }, [hasPermission]);

  useEffect(() => {
    if (!location) return;

    (async () => {
      const [result] = await Location.reverseGeocodeAsync(location);
      if (!result) return;
      setLocationString(
        `${result["city"] ?? result["region"]}, ${result["country"]}`
      );
    })();
  }, [location]);

  const handleTakePhoto = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setImage(photo.uri);

    let { status } = await Location.getForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    const position = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    setLocation(coords);
  };

  const handleRetakePhoto = async () => {
    setImage(null);
  };

  const handleSubmit = () => {
    onSubmit({ post: { image, title, location, locationString } });
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
                <ImageContainer>
                  {image ? (
                    <ImageStyled source={{ uri: image }} />
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
                </ImageContainer>
                <AddImageIconWrap
                  onPress={image ? handleRetakePhoto : handleTakePhoto}
                >
                  <AddImageIcon
                    opacity={image ? 0.3 : 1}
                    fill={image ? theme.colors.white : theme.colors.border}
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
                value={locationString}
                placeholder="Location"
                onChangeText={(text) => setLocation(text)}
                diabled={true}
                style={{
                  backgroundColor: theme.colors.white,
                  paddingLeft: theme.spacing[2],
                }}
              />
              <InputLabel>
                <LocationIcon />
              </InputLabel>
            </InputWrap>
            <Button text="Publish" onPress={handleSubmit} />
          </ScrollView>
        </KeyboardAvoidingView>
      </FormContent>
    </FormContainer>
  );
};

export default PostForm;
