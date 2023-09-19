import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100vh;
    width: 100vw;
`

export const ResultContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid dimgray;
    width: 100%;
    padding: 8px;
    gap: 8px
`

export const ResultPreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const PaddedContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    width: 80%;
    height: 100%;
`
export const ModalBackground = styled.div`\
  background-color: rgba(128, 128, 128, 0.5);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`
export const ModalContainer = styled.div`
  position: relative;
    height: fit-content;
    width: 80%;
    max-height: 80%;
    overflow-y: hidden;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 8px;
`

export const ContentContainer = styled.div`
    overflow-y: auto;
    padding: 8px;
`
