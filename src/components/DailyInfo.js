import nullCheck from "./nullCheck";
import React from 'react';

function DailyInfo (props){
    return (
        <div>
            <p>Day: {nullCheck(props).day}</p>
            <p>Night: {nullCheck(props).night}</p>
        </div>
    );
};

export default DailyInfo;