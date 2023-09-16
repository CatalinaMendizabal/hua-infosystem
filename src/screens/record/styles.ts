import styled from "styled-components";
import {H3, P} from "../../components/commonComponents/textStyle";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100vh;
    width: 100vw;
`

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`


export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 300px;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 70%;
    gap: 15px;
    justify-content: center;
`

export const StructureContainer = styled.div`
  background-color: ${(props) => props.theme.infoBlue};
  border-radius: 10px;
  padding: 15px;
  max-width: 300px;
  min-width: 250px;
  height: fit-content;
  color: white;
`

export const StructureTittle = styled(H3)`
    margin-bottom: 10px;
`
export const StructureItem = styled.div`
    display: flex;
    width: 100%;
    gap:8px;
`

export const ModifyResponseTextArea = styled.textarea`
  width: 300px;
  min-height: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`
