import nullCheck from "./nullCheck";
import React from 'react';
import "./components.css"

function Image (props){
    //got idea how use webpage icons from https://www.youtube.com/watch?v=InoAIgBZIEA
    return <img id="weatherImg" src={`https://openweathermap.org/img/w/${nullCheck(props).icon}.png`} />
  
};

export default Image;