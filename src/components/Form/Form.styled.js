import styled from "styled-components/native";

export const Form = styled.KeyboardAvoidingView`
  padding: ${({ theme }) => theme.spacing[2]}px
    ${({ theme }) => theme.spacing[1]}px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  align-items: center;
  flex: ${({ dimensions, style }) =>
    dimensions >= 500 ? 0.8 : style?.flex ? style.flex : 0.6};
  margin: 0
    ${({ dimensions, theme }) => (dimensions >= 500 ? theme.spacing[3] : 0)}px;
`;

export const FormContent = styled.ScrollView`
  width: 100%;
  flex: 1;
  margin-bottom: ${({ dimensions, os, theme }) =>
    dimensions >= 500 && os === "ios" ? theme.spacing[2] : 0}px;
`;

export const Heading = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Fields = styled.View`
  padding: ${({ theme }) => theme.spacing[1]}px 0;
  flex-direction: column;
  width: 100%;
`;

export const FieldWrap = styled.View`
  position: relative;
`;

export const FieldControl = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing[1]}px;
  top: ${({ os }) => (os === "ios" ? 23 : 21)}px;
  justify-content: center;
  z-index: 1;
`;
