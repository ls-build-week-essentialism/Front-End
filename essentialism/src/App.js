import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginScreen from './components/LoginScreen';
import ValueSelectorForm from './components/ValueSelectorForm';



function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ValueSelectorForm /> */}
    </div>
  );
}

export default App;