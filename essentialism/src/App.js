import React from "react";
import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import LoginScreen from "./components/LoginScreen";
import ValueSelectorForm from "./components/ValueSelectorForm";
import ActivityForm from "./components/ActivityForm";
import SignUpScreen from "./components/SignUpScreen";
import UserDashboard from "./components/UserDashboard";
import logo from './images/logo.png'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/value" component={ValueSelectorForm} />
        <Route path="/activity" component={ActivityForm} />
        <Route path="/signupForm" component={SignUpScreen}/>
        <Route path="/userDashboard" component={UserDashboard}/>
      </Switch>
    </div>
  );
}

export default App;
