import React from 'react';
import {ContentContainer, ModalContainer, ResultPreviewContainer} from "./styles";
import {P, SmallP} from "../../components/commonComponents/textStyle";
import {StyledButton} from "../../components/commonComponents/buttonStyle";

export interface ModalContent {
    content: string,
    documents: any[]
}
interface Props {
    content:ModalContent,
    close: () => void
}
const ContentModal = ({content, close}:Props) => {
    console.log("CONTENT", content.documents)
    return (
        <ModalContainer>
            <ContentContainer>
                <SmallP>{content.content}</SmallP>
                {content.documents.map(d =>
                    <ResultPreviewContainer>
                    <P>{d.filename}</P>
                    <a href={d.url}>Open</a>
                    </ResultPreviewContainer>)}
                <div>
                    <StyledButton onClick={close}>Close</StyledButton>
                </div>
            </ContentContainer>
        </ModalContainer>
    );
};

export default ContentModal;
