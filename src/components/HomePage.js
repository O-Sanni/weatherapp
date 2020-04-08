import React from "react";
import axios from "axios";
import DailyInfo from "./DailyInfo";
import Image from "./Image";
import GetDay from "./GetDay";
import "./components.css";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info: props.info,
            oneTemp:null,
            twoTemp:null,
            threeTemp:null,
            fourTemp:null,
            fiveTemp:null,
            sixTemp:null,
            sevenTemp: null,
            oneDate:null,
            twoDate:null,
            threeDate:null,
            fourDate:null,
            fiveDate:null,
            sixDate:null,
            sevenDate: null,
            oneImg:null,
            twoImg:null,
            threeImg:null,
            fourImg:null,
            fiveImg:null,
            sixImg:null,
            sevenImg: null
        }
    }
    async getLocationInfo(){
        console.log(this.state.info)
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${this.state.info}&units=imperial&appid=${key}`);
           this.setState({oneTemp: location.data.daily[0].temp});
           this.setState({twoTemp: location.data.daily[1].temp});
           this.setState({threeTemp: location.data.daily[2].temp});
           this.setState({fourTemp: location.data.daily[3].temp});
           this.setState({fiveTemp: location.data.daily[4].temp});
           this.setState({sixTemp: location.data.daily[5].temp});
           this.setState({sevenTemp: location.data.daily[6].temp});
           this.setState({oneDate: location.data.daily[0].dt});
           this.setState({twoDate: location.data.daily[1].dt});
           this.setState({threeDate: location.data.daily[2].dt});
           this.setState({fourDate: location.data.daily[3].dt});
           this.setState({fiveDate: location.data.daily[4].dt});
           this.setState({sixDate: location.data.daily[5].dt});
           this.setState({sevenDate: location.data.daily[6].dt});
           this.setState({oneImg: location.data.daily[0].weather[0]});
           this.setState({twoImg: location.data.daily[1].weather[0]});
           this.setState({threeImg: location.data.daily[2].weather[0]});
           this.setState({fourImg: location.data.daily[3].weather[0]});
           this.setState({fiveImg: location.data.daily[4].weather[0]});
           this.setState({sixImg: location.data.daily[5].weather[0]});
           this.setState({sevenImg: location.data.daily[6].weather[0]});  
        }
          catch(e){
            console.log(e);
   }
}
    componentDidMount() {
        this.getLocationInfo();
    }
    render(){
        return (
                <div id="homepageMain">
                    <div>
                        <GetDay info={this.state.oneDate} />
                        <Image info={this.state.oneImg} />
                        <DailyInfo info={this.state.oneTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.twoDate} />
                        <Image info={this.state.twoImg} />
                        <DailyInfo info={this.state.twoTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.threeDate} />
                        <Image info={this.state.threeImg} />
                        <DailyInfo info={this.state.threeTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.fourDate} />
                        <Image info={this.state.fourImg} />
                        <DailyInfo info={this.state.fourTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.fiveDate} />
                        <Image info={this.state.fiveImg} />
                        <DailyInfo info={this.state.fiveTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.sixDate} />
                        <Image info={this.state.sixImg} />
                        <DailyInfo info={this.state.sixTemp} />
                    </div>
                    <div>
                        <GetDay info={this.state.sevenDate} />
                        <Image info={this.state.sevenImg} />
                        <DailyInfo info={this.state.sevenTemp} />
                    </div>
                </div>)
    }

}

export default HomePage;