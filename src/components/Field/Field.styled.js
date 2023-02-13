import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const Field = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.spacing[0]}px;
  font-size: ${({ theme }) => theme.typography.size.m};
  background-color: ${({ theme }) => theme.colors.input};
`;
