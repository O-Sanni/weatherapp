import nullCheck from "./nullCheck";
import React from 'react';

function GetDay (props){
    {/* Idea for day displaying was get from : https://makitweb.com/convert-unix-timestamp-to-date-time-with-javascript/*/}
    function getData(props){
    const dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
       let day= new Date (nullCheck(props)*1000);
       return dayOfWeek[day.getDay()];
    }
    return (
        <div>
    
           <p className="days">{getData(props)}</p> 
        </div>
    );
};

export default GetDay;

