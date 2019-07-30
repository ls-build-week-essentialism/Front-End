import React from "react";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import ValueSelectorForm from "./components/ValueSelectorForm";
import ActivityForm from "./components/ActivityForm";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      <ValueSelectorForm />
      <ActivityForm />
    </div>
  );
}

export default App;
