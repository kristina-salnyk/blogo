import styled from "styled-components/native";

export const Link = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing[0]}px 0;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.size.m};
`;
