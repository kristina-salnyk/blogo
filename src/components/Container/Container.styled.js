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

export const ScreenContainer = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

export const ContentTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;
