import React from 'react';
import { Card } from './Card';
import { CardRow } from './CardRow';
import { Clock } from './Clock';

export function SecondsCounterView ({seconds}) {
    const time=seconds;
    const fullTime = time.toString().padStart(6, '0');
    const timeArray= fullTime.split("");
    return (
        <CardRow>
            <Clock />
            {timeArray.map(crdnum => (
                <Card theValue={crdnum}/>
            ))}
        </CardRow>
    );
}