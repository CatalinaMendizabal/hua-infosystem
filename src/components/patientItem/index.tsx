import React from 'react';
import {SmallP} from "../commonComponents/text";
import {IconContainer, PatientItemContainer} from "./style";
import recordIcon from '../../../assets/record.svg'
import {Icon} from "../commonComponents/icon";
import {StyledButton} from "../commonComponents/button";

interface Props {
    patientHistory: number
}

const PatientItem = ({patientHistory}:Props) => {
    return (
        <PatientItemContainer>
            <SmallP>{patientHistory}</SmallP>
            <IconContainer>
                <Icon svg={recordIcon} height={10} width={10}/>
                <StyledButton/>
            </IconContainer>
        </PatientItemContainer>
    );
};

export default PatientItem;
