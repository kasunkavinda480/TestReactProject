import React, { Component } from 'react';
import MainCompo from './component/maincompo';
import Navigation from './component/Navigation/Navigation';
import OtherIndexFile from './component/Navigation/OtherParts';
import LoginFm from './component/loginMain';


//this part for the rect Dom file design
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
    <div>

      <Navigation />

      <Router>
        <Switch>
          <Route path="/index">
            <OtherIndexFile />
          </Route>
          <Route path="/product">
            <MainCompo />
          </Route>
          <Route path="/login">
            <LoginFm UserName="kasunkavinda@gmail.com" password="malith"/>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
