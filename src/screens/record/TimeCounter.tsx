import React, {useEffect, useState} from 'react';
import {H2} from "../../components/commonComponents/textStyle";

interface Props {
    startDate:Date|undefined
    stopDate:Date|undefined
}
const TimeCounter = ({startDate, stopDate}:Props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        if (startDate) {
            const time = stopDate
                ? stopDate.getTime() - startDate.getTime()
                : Date.now() - startDate.getTime();
            setMinutes(Math.floor((time / 1000 / 60)));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, [startDate, stopDate]);

    return <H2>{`${minutes}:${seconds}`}</H2>;
};

export default TimeCounter;
