import React from 'react';
import {ButtonContainer, DocumentContainer, DocumentListContainer} from "./styles";
import {StyledButton} from "../../components/commonComponents/buttonStyle";
import {P, SmallP} from "../../components/commonComponents/textStyle";
import {useNavigate} from "react-router-dom";

interface Props {
    files: File[],
    onRemoveFile: (id:number) => void
}
interface File {
    name: string
    value: string
}
const FileDisplay = ({files, onRemoveFile} : Props) => {
    return <DocumentListContainer>
            {files.map((f, index) => {
                return <DocumentContainer>
                    <SmallP>{f.name}</SmallP>
                    <ButtonContainer>
                        <a href={f.value} target="_blank" rel="noreferrer">Open</a>
                        <StyledButton onClick={() => onRemoveFile(index)}>Remove</StyledButton>
                    </ButtonContainer>
                </DocumentContainer>
            })}
    </DocumentListContainer>
};

export default FileDisplay;
