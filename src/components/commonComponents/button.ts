import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => props.theme.infoBlue};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => props.theme.hoverBlue};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`
