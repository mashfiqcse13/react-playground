import React from "react"
import Logo from './logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" />
        <p>
          Hi ! I am Mashfiq
        </p>
        <a
          className="App-link"
          href="https://mashfiqnahid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Me
        </a>
      </header>
    </div>
  );
}

export default App;
