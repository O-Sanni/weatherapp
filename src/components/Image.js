import nullCheck from "./nullCheck";
import React from 'react';

function Image (props){
    if(nullCheck(props).main==="Clear"){
        return <img src={require("./assets/Clear.png")} />
    }
    if(nullCheck(props).main==="Clouds"){
        return <img src={require("./assets/Clouds.png")} />
    }
    if(nullCheck(props).main==="Snow"){
        return <img src={require("./assets/Snow.png")} />
    }
    if(nullCheck(props).main==="Rain"){
        return <img src={require("./assets/Rain.png")} />
    }
  
    return "No data";
};

export default Image;