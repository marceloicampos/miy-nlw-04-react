//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Button } from './components/Button'

import './styles/global.css';
import { ExperienceBar } from './components/ExperienceBar';

function App() {
  return (
    <div>
      <div>
        <h1>HELLO NLW !</h1>
          <button style={{ height: '2rem' }}>
          TESTE
          </button>
          <Button color="red">
          Botão1
          </Button>
          <Button color="blue">
          Botão2
          </Button>
      </div>
      <div className="container">
        <ExperienceBar />
      </div>
    </div>
  );
}

export default App;

/* 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello NLW ! Edit on ./src/App.tsx
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
