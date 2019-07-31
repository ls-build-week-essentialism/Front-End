import React from "react";
import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import LoginScreen from "./components/LoginScreen";
import ValueSelectorForm from "./components/ValueSelectorForm";
import ActivityDisplay from "./components/ActivityDisplay";
import SignUpScreen from "./components/SignUpScreen";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} />
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/value" component={ValueSelectorForm} />
        <Route path="/activityDisplay" component={ActivityDisplay} />
        <Route path="/signupForm" component={SignUpScreen} />
      </Switch>
    </div>
  );
}

export default App;
