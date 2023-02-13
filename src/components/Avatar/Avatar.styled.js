import styled from "styled-components/native";
import AddIcon from "../icons/AddIcon";

export const ImageWrap = styled.View`
  position: absolute;
  top: -70px;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.fill};
  border-radius: ${({ theme }) => theme.shape.borderRadius.s}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Icon = styled(AddIcon)`
  position: absolute;
  top: 100px;
  left: 125px;
`;
