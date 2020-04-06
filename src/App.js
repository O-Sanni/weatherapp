import React from 'react';
// import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage"
import HourlyForecast from "./components/HourlyForecast";
function App() {
  return (
   
    <div className="App">
<HourlyForecast/>
    <HomePage />
    </div>

  );
}

export default App;
