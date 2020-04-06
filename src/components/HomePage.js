import React from "react";
import axios from "axios";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:null,
            // monday:[],
            // tuesday:[],
            // wednesday:[],
            // thursday:[],
            // friday:[]
        }
    }
    async getLocationInfo(){
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&appid=${key}`);
            this.setState({location: location.datay});
           console.log(this.state.location);  
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getLocationInfo();
    }
    render(){
        return (<div>Hello</div>)
    }

}

export default HomePage;