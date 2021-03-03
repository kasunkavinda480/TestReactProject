import React, { Component } from 'react';
import MainCompo from './component/maincompo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Router>
        <Switch>
          <Route path="/mian">
            <MainCompo/>
          </Route>
          <Route path="login">

          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
