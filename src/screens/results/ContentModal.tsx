import React from 'react';
import {ContentContainer, ModalContainer} from "./styles";
import {SmallP} from "../../components/commonComponents/textStyle";
import {StyledButton} from "../../components/commonComponents/buttonStyle";

interface Props {
    content:string,
    close: () => void
}
const ContentModal = ({content, close}:Props) => {
    return (
        <ModalContainer>
            <ContentContainer>
                <SmallP>{content}</SmallP>
            </ContentContainer>
            <div>
                <StyledButton onClick={close}>Close</StyledButton>
            </div>
        </ModalContainer>
    );
};

export default ContentModal;
