import styled from "styled-components/native";

export const Form = styled.KeyboardAvoidingView`
  padding: ${({ theme }) => theme.spacing[2]}px
    ${({ theme }) => theme.spacing[1]}px;
  width: ${({ dimensions }) => (dimensions >= 500 ? 50 : 100)}%;
`;

export const ImageWrap = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  border-radius: ${({ theme }) => theme.shape.borderRadius.xs}px;
  max-height: 250px;
  width: 100%;
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