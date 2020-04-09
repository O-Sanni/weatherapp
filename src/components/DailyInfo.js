import nullCheck from "./nullCheck";
import React from 'react';

function DailyInfo (props){
   function checkTempVal(temp){
        if(temp==="metric"){
            return "℃";
        }
        else{
            return "℉";
        }
    }
    return (
        <div>
            <p className="temperature">Day: {Math.trunc(nullCheck(props).day)}{checkTempVal(props.temp)}</p>
            <p className="temperature">Night: {Math.trunc(nullCheck(props).night)}{checkTempVal(props.temp)}</p>
        </div>
    );
};

export default DailyInfo;