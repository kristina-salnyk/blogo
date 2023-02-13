import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

export const Background = styled.ImageBackground`
  background-size: cover;
  justify-content: flex-end;
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;
