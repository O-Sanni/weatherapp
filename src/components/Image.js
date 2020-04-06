import nullCheck from "./nullCheck";
import React from 'react';
import "./components.css"

function Image (props){
    if(nullCheck(props).main==="Clear"){
        return <img id="weatherImg"  src={require("./assets/Clear.png")} />
    }
    if(nullCheck(props).main==="Clouds"){
        return <img id="weatherImg"  src={require("./assets/Clouds.png")} />
    }
    if(nullCheck(props).main==="Snow"){
        return <img id="weatherImg"  src={require("./assets/Snow.png")} />
    }
    if(nullCheck(props).main==="Rain"){
        return <img id="weatherImg" src={require("./assets/Rain.png")} />
    }
  
    return "No data";
};

export default Image;