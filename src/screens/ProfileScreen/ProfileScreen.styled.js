import styled from "styled-components/native";

export const ProfileContentWrap = styled.ScrollView`
  width: ${({ dimensions }) => (dimensions >= 500 ? 50 : 100)}%;
`;

export const TopArea = styled.View`
  padding: ${({ theme, dimensions }) =>
      theme.spacing[dimensions > 500 ? 3 : 4]}px
    0;
`;

export const ProfileContent = styled.View`
  padding-top: ${({ theme }) => theme.spacing[5]}px;

  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.m}px;

  position: relative;
  align-items: center;
  flex: 1;
`;

export const LogoutControl = styled.TouchableOpacity`
  margin-left: auto;

  position: absolute;
  top: 20px;
  right: 20px;
`;
