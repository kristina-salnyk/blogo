import styled from "styled-components/native";

export const ControlPanel = styled.SafeAreaView`
  padding-top: ${({ theme }) => theme.spacing[1]}px;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PostControl = styled.TouchableOpacity`
  align-self: center;
`;
