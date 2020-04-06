import React from "react";
import axios from "axios";
import DailyInfo from "./DailyInfo";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataDaily:[]
        }
    }
        componentDidMount() {
            const key=process.env.REACT_APP_API_KEY_WEATHER;
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&units=imperial&appid=${key}`)
            .then(res=>{
                const weather=res.data.daily.temp;
                console.log(weather); 
                this.setState({dataDaily: weather})
            })
            .catch(e=>{
                console.log(e);
        })
    }
    
        render(){
            return(<div>
                Weather
            </div>)
        }
    }
