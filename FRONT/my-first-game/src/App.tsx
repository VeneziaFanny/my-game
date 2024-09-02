import React from 'react';
import logo from './badge.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bonjour et bienvenue dans mon premier jeu vidéo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrer dans le jeu
        </a>
      </header>
    </div>
  );
}

export default App;
