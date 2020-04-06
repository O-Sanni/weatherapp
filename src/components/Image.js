import nullCheck from "./nullCheck";
import React from 'react';

function Image (props){
    // function weather(){
        
    //     let image=nullCheck(props).main;
    //     console.log(image);
    //     return image;
    // }
    return (
        <div>
            {/* {weather()} */}
            <h1>{nullCheck(props).id}</h1>
            {/* <img src={require(`./assets/${nullCheck(props).main}.png`)} /> */}
        </div>
    );
};

export default Image;