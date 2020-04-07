import nullCheck from "./nullCheck";
import React from 'react';

function DailyInfo (props){
    return (
        <div>
            <p className="temperature">Day: {Math.trunc(nullCheck(props).day)}F</p>
            <p className="temperature">Night: {Math.trunc(nullCheck(props).night)}F</p>
        </div>
    );
};

export default DailyInfo;