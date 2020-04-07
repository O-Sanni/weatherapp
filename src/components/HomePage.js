import React from "react";
import axios from "axios";
import DailyInfo from "./DailyInfo";
import Image from "./Image";
import "./components.css";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mondayTemp:null,
            tuesdayTemp:null,
            wednesdayTemp:null,
            thursdayTemp:null,
            fridayTemp:null,
            saturdayTemp:null,
            sundayTemp: null,
            mondayImg:null,
            tuesdayImg:null,
            wednesdayImg:null,
            thursdayImg:null,
            fridayImg:null,
            saturdayImg:null,
            sundayImg: null
        }
    }
    async getLocationInfo(){
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&units=imperial&appid=${key}`);
           this.setState({mondayTemp: location.data.daily[0].temp});
           this.setState({tuesdayTemp: location.data.daily[1].temp});
           this.setState({wednesdayTemp: location.data.daily[2].temp});
           this.setState({thursdayTemp: location.data.daily[3].temp});
           this.setState({fridayTemp: location.data.daily[4].temp});
           this.setState({saturdayTemp: location.data.daily[5].temp});
           this.setState({sundayTemp: location.data.daily[6].temp});   
           this.setState({mondayImg: location.data.daily[0].weather[0]});
           this.setState({tuesdayImg: location.data.daily[1].weather[0]});
           this.setState({wednesdayImg: location.data.daily[2].weather[0]});
           this.setState({thursdayImg: location.data.daily[3].weather[0]});
           this.setState({fridayImg: location.data.daily[4].weather[0]});
           this.setState({saturdayImg: location.data.daily[5].weather[0]});
           this.setState({sundayImg: location.data.daily[6].weather[0]});  
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getLocationInfo();
    }
    render(){
        return (<div id="homepageMain">
        <div><h3 className="days">Monday</h3>
            <Image info={this.state.mondayImg} />
            <DailyInfo info={this.state.mondayTemp} /></div>
        <div><h3 className="days">Tuesday</h3>
            <Image info={this.state.tuesdayImg} />
            <DailyInfo info={this.state.tuesdayTemp} /></div>
        <div><h3 className="days">Wednesday</h3>
            <Image info={this.state.wednesdayImg} />
            <DailyInfo info={this.state.wednesdayTemp} /></div>
        <div><h3 className="days">Thursday</h3>
            <Image info={this.state.thursdayImg} />
            <DailyInfo info={this.state.thursdayTemp} /></div>
        <div><h3 className="days">Friday</h3>
            <Image info={this.state.fridayImg} />
            <DailyInfo info={this.state.fridayTemp} /></div>
        <div><h3 className="days">Saturday</h3>
            <Image info={this.state.saturdayImg} />
            <DailyInfo info={this.state.saturdayTemp} /></div>
        <div><h3 className="days">Sunday</h3>
            <Image info={this.state.sundayImg} />
            <DailyInfo info={this.state.sundayTemp} /></div>
        </div>)
    }

}

export default HomePage;