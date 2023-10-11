import React, {useState} from 'react';
import {DetailsContainer, ResultContainerStyle, ResultPreviewContainer} from "./styles";
import {BoldP, P, SmallP} from "../../components/commonComponents/textStyle";
import {StyledButton} from "../../components/commonComponents/buttonStyle";
import {Icon} from "../../components/commonComponents/Icon";
import arrow from "../../assets/arrow.svg"
import {useNavigate} from "react-router-dom";

export interface Form {
    content: string,
    formType: string,
    documents: any[]
}

interface Props {
    forms: Form[],
    historyNumber: string,
    openModal: (f:Form) => void
}
const ResultContainer = ({forms, historyNumber, openModal}:Props) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <ResultContainerStyle>
            <ResultPreviewContainer>
                <BoldP>{historyNumber}</BoldP>
                <div>
                    <StyledButton onClick={() => setExpanded(!expanded)}><Icon svg={arrow} height={12} width={12} rotation={expanded ? 90 : 0}/></StyledButton>
                </div>
            </ResultPreviewContainer>
            {expanded && forms.map((form, index) =>
                <DetailsContainer key={index}>
                    <SmallP>{form.formType}</SmallP>
                    <div>
                        <StyledButton onClick={() => openModal(form)}>See more</StyledButton>
                    </div>
                </DetailsContainer>
            )}
        </ResultContainerStyle>
    );
};

export default ResultContainer;
