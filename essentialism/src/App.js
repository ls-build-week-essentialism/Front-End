import React from "react";
import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import ValueSelectorForm from "./components/ValueSelectorForm";
import ActivityForm from "./components/ActivityForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/value" component={ValueSelectorForm} />
        <Route path="/activityForm" component={ActivityForm} />
      </Switch>
    </div>
  );
}

export default App;
