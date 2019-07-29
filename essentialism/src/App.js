import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';

const ButtonExampleButton = () => <Button>Click Here</Button>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonExampleButton />
      </header>
    </div>
  );
}

export default App;
