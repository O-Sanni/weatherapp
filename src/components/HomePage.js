import React from "react";
import axios from "axios";
import DailyInfo from "./DailyInfo";
import Image from "./Image"

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mondayTemp:null,
            tuesdayTemp:null,
            wednesdayTemp:null,
            thursdayTem:null,
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
        //    this.setState({tuesdayTemp: location.data.daily[1].temp});
        //    this.setState({wednesdayTemp: location.data.daily[2].temp});
        //    this.setState({thursdayTemp: location.data.daily[3].temp});
        //    this.setState({fridayTemp: location.data.daily[4].temp});
        //    this.setState({saturdayTemp: location.data.daily[5].temp});
        //    this.setState({sundayTemp: location.data.daily[6].temp});   
           this.setState({mondayImg: location.data.daily[0].weather});
        //    this.setState({tuesdayImg: location.data.daily[1].weather});
        //    this.setState({wednesdayImg: location.data.daily[2].weather});
        //    this.setState({thursdayImg: location.data.daily[3].weather});
        //    this.setState({fridayImg: location.data.daily[4].weather});
        //    this.setState({saturdayImg: location.data.daily[5].weather});
        //    this.setState({sundayImg: location.data.daily[6].weather});   
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getLocationInfo();
    }
    render(){
        return (<div>
        <h1>Forecast</h1>
            <h3>Monday:</h3>
            <Image info={this.state.mondayImg} />
            <DailyInfo info={this.state.mondayTemp} />

        </div>)
    }

}

export default HomePage;