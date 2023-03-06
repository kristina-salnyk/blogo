import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacing[1]}px
    ${({ theme }) => theme.spacing[1]}px 0;
`;

export const ImageWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.fill};
`;

export const Image = styled.Image`
  width: 100%;
  border-radius: ${({ theme }) => theme.shape.borderRadius.xs}px;
  height: 250px;
`;

export const Text = styled.Text`
  padding: ${({ theme }) => theme.spacing[0]}px 0;
`;

export const PostFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[1]}px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing[1]}px;
  max-width: 50%;
`;

export const ClickableGroup = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing[1]}px;
  max-width: 50%;
`;

export const Label = styled.Text`
  margin-left: ${({ theme }) => theme.spacing[0]}px;
  color: ${({ theme }) => theme.colors.text.placeholder};
`;

export const Link = styled.Text`
  margin-left: ${({ theme }) => theme.spacing[0]}px;
  text-decoration: underline;
`;
