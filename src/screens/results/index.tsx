import React, {useEffect, useState} from 'react';
import Structure from "../../components/structure";
import {ModalBackground, PaddedContainer, StyledContainer} from "./styles";
import ResultContainer, {Form} from "./ResultContainer";
import Loader from "../../components/commonComponents/Loader";
import ContentModal, {ModalContent} from "./ContentModal";
import {groupBy} from "lodash";

const Results = () => {
    const [records, setRecords] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [modalContent, setModalContent] = useState<ModalContent|undefined>()
    useEffect(() => {
        fetch('http://ec2-18-118-217-154.us-east-2.compute.amazonaws.com:80/get-records', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json().then((data) => {
            const responseRecords = data.records.filter((record:any) => {
                return record.fields?.History_number;
            }).map((record:any) => ({
                form: {
                    content: record.fields?.Diagnosis || "",
                    formType: record.fields?.Form || "",
                    documents: record.fields?.document_name?.map((doc_name : any, index: number) => ({name: doc_name, url: record.fields?.document_url[index]})) || []
                },
                historyNumber: record.fields?.History_number || ""
            }))
            setRecords(groupBy(responseRecords, (r) => r.historyNumber))
            setLoading(false)
        }))
    }, [])
    debugger
    const handleOpenModal = (f:Form) => {
        setModalContent({content: f.content, documents: f.documents})
    }

    return (
        <Structure>
            {
                modalContent && <ModalBackground>
                    <ContentModal content={modalContent} close={() => setModalContent(undefined)} />
                </ModalBackground>
            }
            <StyledContainer>
                <PaddedContainer>
                    {loading && <Loader/>}
                    {!loading && Object.entries(records).map(([key, value]) =>
                        <ResultContainer
                            // @ts-ignore
                            forms={value.map((v:any) =>
                                ({ content: `${v?.form.content}`, formType: `${v?.form.formType}`, documents: [].concat(v?.form.documents)}))
                            }
                            historyNumber={key}
                            openModal={handleOpenModal}
                        />
                    )}
                </PaddedContainer>

            </StyledContainer>
        </Structure>
    );
};

export default Results;
