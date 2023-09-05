import React, {useState, useEffect} from 'react'
import Structure from "../../components/structure";
import Recorder from "./Recorder";
import {useReactMediaRecorder} from "react-media-recorder";

const RecordingScreen = ({}) => {
    const {startRecording, stopRecording, mediaBlobUrl, pauseRecording, resumeRecording} = useReactMediaRecorder({audio: true})
    const [base64Data, setBase64Data] = useState<string>('');

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

                            // Now, you can send the base64 data to your server using fetch
                            fetch('http://localhost:8080', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ base64Data }),
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    // Handle the response from your server
                                    console.log(data);
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        }
                    };
                });
            });
        }
    }, [mediaBlobUrl])

    return <Structure>
        <Recorder
            startRecording={startRecording}
            stopRecording={stopRecording}
            pauseRecording={pauseRecording}
            resumeRecording={resumeRecording}
        />
    </Structure>
}

export default RecordingScreen
