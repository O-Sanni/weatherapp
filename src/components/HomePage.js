import React from "react";
import axios from "axios";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            monday:null,
            tuesday:null,
            wednesday:null,
            thursday:null,
            friday:null,
            saturday:null,
            sunday: null
        }
    }
    async getLocationInfo(){
        const key=process.env.REACT_APP_API_KEY_WEATHER;
        try{
           const location= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&units=imperial&appid=${key}`);
           this.setState({monday: location.data.daily[0]});
           this.setState({tuesday: location.data.daily[1]});
           this.setState({wednesday: location.data.daily[2]});
           this.setState({thursday: location.data.daily[3]});
           this.setState({friday: location.data.daily[4]});
           this.setState({saturday: location.data.daily[5]});
           this.setState({sunday: location.data.daily[6]});
           console.log(this.state.monday);  
           console.log(this.state.tuesday);  
           console.log(this.state.wednesday);  
           console.log(this.state.thursday);  
           console.log(this.state.friday);  
           console.log(this.state.saturday);  
           console.log(this.state.sunday);    
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