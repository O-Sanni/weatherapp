import React from "react";
import axios from "axios";
import Image from "./Image";
import "./components.css";

class HourlyForecast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hourlyData:null
        }
    }
    async getHourlyInfo(){
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&units=imperial&appid=${key}`);
        for (let i=0; i<48; i++){
            this.setState(data => ({
                hourlyData: [...data.hourlyData, location.data.hourly[i]]
              }))
        }
        console.log(this.setState.hourlyData[0]);
        
        
           //    this.setState({mondayTemp: location.data.daily[0].temp});
        //    this.setState({tuesdayTemp: location.data.daily[1].temp});
        //    this.setState({wednesdayTemp: location.data.daily[2].temp});
        //    this.setState({thursdayTemp: location.data.daily[3].temp});
        //    this.setState({fridayTemp: location.data.daily[4].temp});
        //    this.setState({saturdayTemp: location.data.daily[5].temp});
        //    this.setState({sundayTemp: location.data.daily[6].temp});   
        //    this.setState({mondayImg: location.data.daily[0].weather[0]});
        //    this.setState({tuesdayImg: location.data.daily[1].weather[0]});
        //    this.setState({wednesdayImg: location.data.daily[2].weather[0]});
        //    this.setState({thursdayImg: location.data.daily[3].weather[0]});
        //    this.setState({fridayImg: location.data.daily[4].weather[0]});
        //    this.setState({saturdayImg: location.data.daily[5].weather[0]});
        //    this.setState({sundayImg: location.data.daily[6].weather[0]});  
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

        </div>)
    }
}

export default HourlyForecast;