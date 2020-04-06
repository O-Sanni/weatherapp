import nullCheck from "./nullCheck";
import React from 'react';

function DailyInfo (props){
    return (
        <div>
            <h4>Night Temp: {nullCheck(props).night}</h4>
        </div>
    );
};

export default DailyInfo;