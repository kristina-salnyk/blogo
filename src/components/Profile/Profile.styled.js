import styled from "styled-components/native";

export const Profile = styled.View`
  padding-top: 90px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  align-items: center;
  flex: 1;
`;

export const LogoutControl = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  margin-left: auto;
`;
