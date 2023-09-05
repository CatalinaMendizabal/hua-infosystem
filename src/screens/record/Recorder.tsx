import React, {useState} from 'react';
import TimeCounter from "./TimeCounter";
import {ButtonContainer, StyledContainer} from "./styles";
import {StyledButton} from "../../components/commonComponents/button";
import {ReactMediaRecorder} from "react-media-recorder";

interface Props {
    startRecording: () => void,
    stopRecording: () => void,
    pauseRecording: () => void,
    resumeRecording: () => void
}
const Recorder = ({ startRecording, stopRecording, pauseRecording, resumeRecording }:Props) => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)
    const [stopDate, setStopDate] = useState<Date | undefined>(undefined)

    const onStartRecording = () => {
        startRecording()
        setStartDate(new Date())
    }

    const onStopRecording = () => {
        stopRecording()
        setStartDate(undefined)
    }

    const onPauseRecording = () => {
        if (startDate){
            setStopDate(new Date())
            pauseRecording()
        }
    }

    const onResumeRecording = () => {
        if (startDate && stopDate) {
            setStartDate(new Date(startDate.getTime() + (Date.now() - stopDate.getTime())))
            setStopDate(undefined)
            resumeRecording()
        }
    }

    return (
        <StyledContainer>
            <TimeCounter startDate={startDate} stopDate={stopDate} />
            <ButtonContainer>
                {!startDate && <StyledButton onClick={onStartRecording}>Start recording</StyledButton>}
                {startDate && <StyledButton onClick={onStopRecording}>Stop recording</StyledButton>}
                {(startDate && !stopDate) && <StyledButton onClick={onPauseRecording}>Pause</StyledButton>}
                {stopDate && <StyledButton onClick={onResumeRecording}>Resume</StyledButton>}
            </ButtonContainer>
        </StyledContainer>
    );
};

export default Recorder;
