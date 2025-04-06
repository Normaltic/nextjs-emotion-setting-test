import styled from "@emotion/styled";

export const Test = styled.div`
  background-color: yellow;
  color: black;
`;

export const FirstBlack = styled.div`
  & > *:nth-child(1) {
    background-color: black;
  }
`;
