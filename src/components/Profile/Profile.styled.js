import styled from "styled-components/native";

export const Profile = styled.SafeAreaView`
  padding: ${({ theme }) => theme.spacing[2]}px
    ${({ theme }) => theme.spacing[1]}px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  align-items: center;
  flex: 0.8;
  margin: 0
    ${({ dimensions, theme }) => (dimensions >= 500 ? theme.spacing[3] : 0)}px;
`;
