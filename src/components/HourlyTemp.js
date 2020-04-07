import nullCheck from "./nullCheck";
import React from 'react';
import "./components.css"

function HourlyTemp (props){
 const array=nullCheck(props);
 console.log(array[0]);
 return "Hello";
};

export default HourlyTemp;