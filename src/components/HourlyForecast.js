import React from "react";
import axios from "axios";
import Image from "./Image";
import HourlyTemp from "./HourlyTemp"
import "./components.css";

class HourlyForecast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hourlyData:[]
        }
    }
    async getHourlyInfo(){
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&units=imperial&appid=${key}`);
        let arrayTemp=[];
           arrayTemp=location.map((value)=>{
            return value.location.hourly.temp;
        })
           this.setState({hourlyData: arrayTemp})
           console.log(this.state.hourlyData);
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getHourlyInfo();
    }
    render(){
        return(<div>
        {/* <HourlyTemp info={this.state.hourlyData}/> */}
        </div>)
    }
}

export default HourlyForecast;