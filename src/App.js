import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"

function App() {
  return (
    <Router>
    <div className="App">
    <Home />
    </div>
    </Router>
  );
}

export default App;
