import styled from "styled-components/native";

export const Publication = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  margin: 0
    ${({ dimensions, theme }) => (dimensions >= 500 ? theme.spacing[3] : 0)}px;
  width: 100%;
  flex: 1;
`;
