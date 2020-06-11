import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import SingleRoom from "./pages/SingleRoom"
import Rooms from "./pages/Rooms"
import Error from "./pages/Error"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  return (
    <React.Fragment>
<Navbar/>
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:id" component={SingleRoom} />
      <Route component={Error}/>
     
      </Switch>
    
    </React.Fragment>
  );
}

export default App;
