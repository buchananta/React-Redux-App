import React, { useEffect } from 'react';
import './App.css';
import Comic from './components/Comic';
import { getComic } from './actions';

function App() {
  
  useEffect(() => getComic(), [])

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
