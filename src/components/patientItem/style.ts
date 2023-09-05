import styled from "styled-components";

export const PatientItemContainer = styled.button`
    display: flex;
    justify-content: space-between;
    padding: 8px;
  
    &:hover {
      color: ${(props) => props.theme.hoverBlue};
      background-color: ${(props) => props.theme.infoGray1};
    }
`

export const IconContainer = styled.div`
    display: flex;
    gap: 8px;
`
