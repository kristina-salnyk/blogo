import styled from "styled-components/native";

export const PostContent = styled.View`
  padding: ${({ theme }) => theme.spacing[1]}px
    ${({ theme }) => theme.spacing[1]}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[1]}px;
`;

export const AvatarWrap = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.fill};
  border-radius: ${({ theme }) => theme.shape.borderRadius.s}px;
  margin-right: ${({ theme }) => theme.spacing[1]}px;
`;

export const Image = styled.Image`
  width: 100%;
  border-radius: ${({ theme }) => theme.shape.borderRadius.xs}px;
`;

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.title};
  font-size: ${({ theme }) => theme.typography.size.s};
`;

export const ImageWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.fill};
`;

export const Text = styled.Text`
  padding: ${({ theme }) => theme.spacing[0]}px 0;
`;

export const Footer = styled.View`
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

export const Label = styled.Text`
  margin-left: ${({ theme }) => theme.spacing[0]}px;
  color: ${({ theme }) => theme.colors.text.placeholder};
`;

export const Link = styled.Text`
  margin-left: ${({ theme }) => theme.spacing[0]}px;
  text-decoration: underline;
`;
