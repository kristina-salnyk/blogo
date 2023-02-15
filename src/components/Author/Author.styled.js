import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[1]}px;
`;

export const ImageWrap = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.fill};
  border-radius: ${({ theme }) => theme.shape.borderRadius.s}px;
  margin-right: ${({ theme }) => theme.spacing[1]}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.title};
  font-size: ${({ theme }) => theme.typography.size.s};
`;
