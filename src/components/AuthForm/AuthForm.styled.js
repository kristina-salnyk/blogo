import styled from "styled-components/native";
import { Platform } from "react-native";

export const FormContainer = styled.KeyboardAvoidingView`
  margin: 0
    ${({ dimensions, theme }) => (dimensions >= 500 ? theme.spacing[3] : 0)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.m}px;

  position: relative;
  align-items: center;

  flex: ${({ dimensions, style }) =>
    dimensions >= 500 ? 0.8 : style?.flex ? style.flex : 0.6};
`;

export const FormContent = styled.ScrollView`
  padding: 0 ${({ theme }) => theme.spacing[1]}px;
  margin-bottom: ${({ dimensions, theme }) =>
    dimensions >= 500 && Platform.OS === "ios" ? theme.spacing[2] : 0}px;
  width: 100%;
  flex: 1;
`;

export const Fields = styled.View`
  padding: ${({ theme }) => theme.spacing[1]}px 0;
  flex-direction: column;
  width: 100%;
`;

export const InputWrap = styled.View`
  position: relative;
`;

export const InputControl = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing[1]}px;
  top: ${() => (Platform.OS === "ios" ? 23 : 21)}px;

  justify-content: center;
  z-index: 1;
`;

export const ControlText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;
