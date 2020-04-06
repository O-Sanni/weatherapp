import nullCheck from "./nullCheck";
import React from 'react';

function Image (props){
    function weather(){
        
        let image=nullCheck(props).main;
        console.log(image);
        return image;
    }
    return (
        <div>
            {/* <h1>Weather: {nullCheck(props).main}</h1> */}
            <img src={require(`./assets/${this.weather()}.png`)} />
        </div>
    );
};

export default Image;