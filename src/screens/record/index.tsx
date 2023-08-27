import React, {useState, useEffect} from 'react'
import Structure from "../../components/structure";

const RecordingScreen = ({}) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)

    const getTime = () => {
        if (startDate) {
            const time = Date.now() - startDate.getTime();
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    // useEffect(() => {
    //     const interval = setInterval(() => getTime(deadline), 1000);
    //
    //     return () => clearInterval(interval);
    // }, []);

    return <Structure>
        <div></div>
    </Structure>
}

export default RecordingScreen
