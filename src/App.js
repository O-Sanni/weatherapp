import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage"
import GetHourlyWeather from "./components/GetHourlyWeather"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temp: "metric"
    }
  }
render(){
  return (
   <Router>
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/" >Main Page</Link>
        </li>
        <li>
          <Link to="/new_york">New York</Link>
          <Link to="/new_york/hourly">New York Hourly Forecast</Link>
        </li>
        <li>
          <Link to="/brooklyn">Brooklyn</Link>
          <Link to="/brooklyn/hourly">Brooklyn Hourly Forecast</Link>
        </li>
        <li>
          <Link to="/bronx">Bronx</Link>
         <Link to="/bronx/hourly">Bronx Hourly Forecast</Link>
        </li>
        <li>
          <Link to="/staten_island">Staten Island</Link>
          <Link to="/staten_island/hourly">Staten Island Hourly Forecast</Link>
        </li>
        <li>
          <Link to="/queens">Queens</Link>
          <Link to="/queens/hourly">Queens Hourly Forecast</Link>
        </li>
      </ul>
    </nav>
     <Switch>
      <Route path="/" exact component={"/"}>
        <MainPage />
      </Route>
      <Route path="/new_york" exact component={"/new_york"}>
        <NewYork />
      </Route>
      <Route path="/new_york/hourly" exact component={"/new_york/hourly"}>
        <NewYorkHourly />
      </Route>
      <Route path="/brooklyn" exact component={"/brooklyn"}>
        <Brooklyn />
      </Route>
      <Route path="/brooklyn/hourly" exact component={"/brooklyn/hourly"}>
        <BrooklynHourly />
      </Route>
      <Route path="/bronx" exact component={"/bronx"}>
        <Bronx />
      </Route>
      <Route path="/bronx/hourly" exact component={"/bronx/hourly"}>
        <BronxHourly />
      </Route>
      <Route path="/staten_island" exact component={"/staten_island"}>
        <StatenIsland />
      </Route>
      <Route path="/staten_island/hourly" exact component={"/staten_island/hourly"}>
        <StatenIslandHourly />
      </Route>
      <Route path="/queens" exact component={"/queens"}>
        <Queens />
      </Route>
      <Route path="/queens/hourly" exact component={"/queens/hourly"}>
        <QueensHourly />
      </Route>
    </Switch>
    </div>
  </Router> 
  );
}
}

let temp="imperial";


function MainPage(){
  return (<div>
          <h1> Please choose  City</h1>
          </div>)}


function NewYork(){
  return  ( <div>
              <h1>New York</h1>
              <HomePage info={"lat=40.7306&lon=-73.935"} temp={temp}/>
            </div>)
}
function NewYorkHourly(){
 return(<div>
          <h1>Hourly Forecast:</h1>
              <GetHourlyWeather info={"lat=40.7306&lon=-73.935"} temp={temp}/></div>)
}
function Brooklyn(){
  return  ( <div>
              <h1>Brooklyn</h1>
              <HomePage info={"lat=40.650&lon=-73.949"} temp={temp} /></div>)
}
function BrooklynHourly(){
  return(<div>
            <h1>Hourly Forecast:</h1>
               <GetHourlyWeather info={"lat=40.650&lon=-73.949"} temp={temp}/></div>)
 }
function Bronx(){
  return  ( <div>
              <h1>Bronx</h1>
              <HomePage info={"lat=40.837&lon=-73.865"} temp={temp} />
            </div>)
}
function BronxHourly(){
  return(<div>
            <h1>Hourly Forecast:</h1>
               <GetHourlyWeather info={"lat=40.837&lon=-73.865"} temp={temp}/></div>)
 }
function StatenIsland(){
  return  ( <div>
              <h1>Staten Island</h1>
              <HomePage info={"lat=40.579&lon=-74.155"} temp={temp}/>
            </div>)
}
function StatenIslandHourly(){
  return(<div>
            <h1>Hourly Forecast:</h1>
               <GetHourlyWeather info={"lat=40.579&lon=-74.155"} temp={temp}/></div>)
 }
function Queens(){
  return  ( <div>
              <h1>Queens</h1>
              <HomePage info={"lat=40.579&lon=-74.155"} temp={temp}/>
            </div>)
}
function QueensHourly(){
  return(<div>
            <h1>Hourly Forecast:</h1>
               <GetHourlyWeather info={"lat=40.579&lon=-74.155"} temp={temp}/></div>)
 }

export default App;
