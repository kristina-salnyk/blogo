import styled from "styled-components/native";

export const PostsContentWrap = styled.View`
  width: ${({ dimensions }) => (dimensions >= 500 ? 50 : 100)}%;
`;
