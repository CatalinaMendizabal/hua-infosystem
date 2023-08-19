import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.infoWhite};
  height: 100vh;
  width: 100vw;
  font-family: "Gotham", sans-serif;
`;
