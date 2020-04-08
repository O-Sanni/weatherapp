import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage"
import HourlyForecast from './components/HourlyForecast';


function App() {
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
        </li>
        <li>
          <Link to="/brooklyn">Brooklyn</Link>
        </li>
        <li>
          <Link to="/bronx">Bronx</Link>
        </li>
        <li>
          <Link to="/staten_island">Staten Island</Link>
        </li>
        <li>
          <Link to="/queens">Queens</Link>
        </li>
      </ul>
    </nav>
   <HourlyForecast />
     <Switch>
      <Route path="/" exact component={"/"}>
        <MainPage />
      </Route>
      <Route path="/new_york">
        <NewYork />
      </Route>
      <Route path="/brooklyn">
        <Brooklyn />
      </Route>
      <Route path="/bronx">
        <Bronx />
      </Route>
      <Route path="/staten_island">
        <StatenIsland />
      </Route>
      <Route path="/queens">
        <Queens />
      </Route>
    </Switch>
    </div>
  </Router> 
  );
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
function Brooklyn(){
  return  ( <div>
  <h1>Brooklyn</h1>
  <HomePage info={"lat=40.650&lon=-73.949"} temp={temp} /></div>)
}
function Bronx(){
  return  ( <div>
              <h1>Bronx</h1>
              <HomePage info={"lat=40.837&lon=-73.865"} temp={temp} />
            </div>)
}
function StatenIsland(){
  return  ( <div>
              <h1>Staten Island</h1>
              <HomePage info={"lat=40.579&lon=-74.155"} temp={temp}/>
            </div>)
}
function Queens(){
  return  ( <div>
              <h1>Queens</h1>
              <HomePage info={"lat=40.579&lon=-74.155"} temp={temp}/>
            </div>)
}

export default App;
