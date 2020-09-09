import React from 'react';
import './App.css';
import Comic from './components/Comic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>random xkcd comic</h1> 
      </header>
      <Comic />
    </div>
  );
}

export default App;
