import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  margin-top: ${({ theme }) => theme.spacing[2]}px;
  margin-bottom: ${({ theme }) => theme.spacing[0]}px;
  padding: ${({ os, theme }) => (os === "ios" ? theme.spacing[1] : 12)}px 0;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius.xs}px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.ml};
  color: ${({ theme }) => theme.colors.white};
`;
