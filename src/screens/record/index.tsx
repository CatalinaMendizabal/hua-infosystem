import React, {useState, useEffect, FormEvent} from 'react'
import Structure from "../../components/structure";
import Recorder from "./Recorder";
import Select from "../../components/commonComponents/Select";
import {FORM_TYPES, STRUCTURE_MAP} from "../../utils/formTypes";
import {
    ItemsContainer, LimitedVerticalContainer,
    ModifyResponseTextArea,
    StructureContainer,
    StructureItem,
    StructureTittle,
    StyledContainer,
    VerticalContainer
} from "./styles";
import {SmallP} from "../../components/commonComponents/textStyle";
import {useReactMediaRecorder} from "react-media-recorder-2";
import {ProcessedData} from "../../utils/interfaces";
import {StyledButton} from "../../components/commonComponents/buttonStyle";
import {Input} from "../../components/commonComponents/inputStyle";
import {useNavigate} from "react-router-dom";
import Loader from "../../components/commonComponents/Loader";
import FileDisplay from "./FileDisplay";

const RecordingScreen = () => {
    const {startRecording, stopRecording, mediaBlobUrl, pauseRecording, resumeRecording} = useReactMediaRecorder({audio: true})
    const [base64Data, setBase64Data] = useState<string>('');
    const [selectedForm, setSelectedForm] = useState(FORM_TYPES[0])
    const [responseData, setResponse] = useState<ProcessedData|undefined>()
    const [selectedHistory, setSelectedHistory] = useState<number|undefined>()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (mediaBlobUrl) {
            fetch(mediaBlobUrl).then(response => {
                response.blob().then(blob => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64 = reader.result?.toString().split(',')[1]; // Get the base64 data
                        if (base64) {
                            setBase64Data(base64);
                        }
                    };
                });
            });
        }
    }, [mediaBlobUrl])

    useEffect(() => {
        if (base64Data) {
            setLoading(true)
            fetch('http://localhost:8080/recognize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ audio: base64Data, type: selectedForm }),
            })
                .then((response) => response.json())
                .then((data) => {
                    debugger
                    const normalizedData:ProcessedData = {
                        content: data?.response?.content || '',
                        files: data?.files || []
                    }
                    setLoading(false)
                    setResponse(normalizedData)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [base64Data, selectedForm])

    const modifyResponseContent = (value:string) => {
        if (responseData) {
            setResponse({
                ...responseData,
                content: value
            })
        }
    }

    const handleSubmitResponse= (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (selectedHistory && responseData) {
            localStorage.setItem(`${selectedHistory}`, responseData.content)
            const date = new Date()
            const offset = date.getTimezoneOffset()
            const adjustedDate = new Date(date.getTime() - (offset*60*1000))
            fetch('http://localhost:8080/add-record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Date: `${adjustedDate.toISOString().split('T')[0]}`,
                    Form: selectedForm,
                    Diagnosis: responseData.content,
                    History_number: selectedHistory,
                    Documents: responseData.files.map((f) => ({Name: f.name, Url: f.value}))
                }),
            }).then(() => navigate("/results"))
        }

    }

    const onRemoveFile = (fileId:number) => {
        if (responseData)
            setResponse({...responseData, files: responseData.files.filter((_:any, index:number) => index !== fileId)})
    }

    return <Structure>
        <StyledContainer>
            {responseData &&
                <form onSubmit={(e) => handleSubmitResponse(e)}>
                    <LimitedVerticalContainer>
                            <ModifyResponseTextArea
                                value={responseData.content}
                                onChange={(e) => modifyResponseContent(e.target.value)}
                            />
                            <FileDisplay files={responseData.files} onRemoveFile={onRemoveFile}/>
                            <Input
                                type={"number"}
                                placeholder={"Input patient history"}
                                onChange={(e) => setSelectedHistory(parseInt(e.target.value))}
                            />
                            <StyledButton type={"submit"}>Save response</StyledButton>
                    </LimitedVerticalContainer>
                </form>
            }
            {!responseData && !loading &&
                <ItemsContainer>
                    <VerticalContainer>
                        <Select values={FORM_TYPES} setSelected={setSelectedForm} />
                        <Recorder
                            startRecording={startRecording}
                            stopRecording={stopRecording}
                            pauseRecording={pauseRecording}
                            resumeRecording={resumeRecording}
                        />
                    </VerticalContainer>
                    <StructureContainer>
                        <StructureTittle>{`${selectedForm} structure`}</StructureTittle>
                        {STRUCTURE_MAP[selectedForm].map((item, index) => (
                            <StructureItem key={index}>
                                <SmallP>-</SmallP>
                                <SmallP>{item}</SmallP>
                            </StructureItem>
                        ))}
                    </StructureContainer>
                </ItemsContainer>
            }
            {loading && <Loader/>}
        </StyledContainer>
    </Structure>
}

export default RecordingScreen
