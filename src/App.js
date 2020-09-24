import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import DonationPage from "./components/donationPage/DonationPage";
import SongsPage from "./components/songsPage/SongsPage";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="app-wrapper-content">
        <Switch>
            <Redirect exact from="/" to="/songs"/>
            <Route
              path="/songs"
              render={() => <SongsPage/>}/>
            <Route
              path="/donation"
              render={() => <DonationPage/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
