import React from "react";
import axios from "axios";
import "./components.css";

class GetHourlyWeather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temp:props.temp,
            info: props.info,
            temperature:[] ,
            fOrC: ""      
        }
    }
    checkTempVal(){
        if(this.state.temp==="metric"){
            this.setState({fOrC: "℃"})
        }
        else{
            this.setState({fOrC: "℉"})
        }
    }
    async getTempInfo(){
        console.log(this.state.info)
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${this.state.info}&units=${this.state.temp}&appid=${key}`);
        this.setState({temperature:location.data.hourly });
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getTempInfo();
        this.checkTempVal();
    }

    render(){
        function MidnightCheck(time){
            if (time===0){
                return 12;
            }
            else {
                return time;
            }
        }
        function testTime(time){
            if(time>=12){
                return "pm";
            }
            else {
                return "am";
            }
        }
        const dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let hourlyTemp=this.state.temperature.map(response=>{
            let day= new Date (response.dt*1000);
            let time= MidnightCheck(day.getHours()%12);
            let amOrpm=testTime(day.getHours());
           return (<div className="hourly">
           <p>{dayOfWeek[day.getDay()]}</p>
            <p>{time}{amOrpm}</p>
            <p>{Math.trunc(response.temp)}{this.state.fOrC}</p>
            <p>Pressure:{response.pressure}mb</p>
            <img className="weatherI" src={`https://openweathermap.org/img/w/${response.weather[0].icon}.png`} alt="weather"/>
            </div> )});
        return (
                <div id="homepageMain">
                    <div id="newyorkHourly">
                    {hourlyTemp}
                    </div>
                </div>
        )
    }

}

export default GetHourlyWeather;