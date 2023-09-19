import React, {useEffect, useState} from 'react';
import Structure from "../../components/structure";
import {connectToAirTable} from "../../utils/connectToAirTable";
import {groupBy} from 'lodash-es'
import {ModalBackground, PaddedContainer, StyledContainer} from "./styles";
import ResultContainer, {Form} from "./ResultContainer";
import Loader from "../../components/commonComponents/Loader";
import ContentModal from "./ContentModal";
const Results = () => {

    const [records, setRecords] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [modalContent, setModalContent] = useState<string|undefined>()
    const airTable = connectToAirTable()
    useEffect(() => {
        airTable.select({
            view: "Records"
        }).eachPage((records, processNextPage) => {
            const allRecords = records.map((r) => ({
                history: r.get("History_number"),
                content: r.get("Diagnosis"),
                formType: r.get("Form"),
                documents: r.get("documents")
            })).filter((r) => !!r?.history)
            setRecords(groupBy(allRecords, (r) => r.history))
            processNextPage()
        }).then(() => setLoading(false))
    }, [])
    const handleOpenModal = (f:Form) => {
        setModalContent(f.content)
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
                                ({ content: `${v?.content}`, formType: `${v?.formType}`}))
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
