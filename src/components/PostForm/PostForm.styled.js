import styled from "styled-components/native";
import { Platform } from "react-native";

export const FormContainer = styled.KeyboardAvoidingView`
  margin: 0
    ${({ dimensions, theme }) => (dimensions >= 500 ? theme.spacing[3] : 0)}px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  flex: 1;
`;

export const FormContent = styled.View`
  padding: ${({ theme }) => theme.spacing[2]}px
    ${({ theme }) => theme.spacing[1]}px 0;
  margin-bottom: ${({ dimensions, theme }) =>
    dimensions >= 500 && Platform.OS === "ios" ? theme.spacing[2] : 0}px;
  width: ${({ dimensions }) => (dimensions >= 500 ? 50 : 100)}%;
  flex: 1;
`;

export const ImageWrap = styled.View`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius.xs}px;
  overflow: hidden;
`;

export const ImageStyled = styled.Image`
  height: 250px;
  justify-content: center;
`;

export const AddImageIconWrap = styled.TouchableOpacity`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -30px -30px;
`;

export const Text = styled.Text`
  padding: ${({ theme }) => theme.spacing[0]}px 0;
  color: ${({ theme }) => theme.colors.text.placeholder};
  font-size: ${({ theme }) => theme.typography.size.m};
`;

export const InputLabel = styled.TouchableOpacity`
  position: absolute;
  left: ${({ theme }) => theme.spacing[1]}px;
  top: ${({ theme }) => theme.spacing[1]}px;
`;
