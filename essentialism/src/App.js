import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './components/LoginScreen';
import ValueSelectorForm from './components/ValueSelectorForm';

const image = "logo.jpg"


function App() {
  return (
    <div className="App">
      <img src={image}  alt="company-logo"/>
      <LoginScreen />
      {/* <ValueSelectorForm /> */}
    </div>
  );
}

export default App;