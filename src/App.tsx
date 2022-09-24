import React from 'react';
import logo from "app/assets/logo.png"
import 'app/styles/App.css';
import { Router } from 'app/router';

function App() {
  return (
    <div className="App">
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router />
    </div>
  );
}

export default App;
