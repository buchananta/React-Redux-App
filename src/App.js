import React, { useEffect } from 'react';
import './App.css';
import Comic from './components/Comic';
import Buttons from './components/Buttons';

import { getComic } from './actions';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>random xkcd comic</h1> 
      </header>
      <Buttons />
      <Comic />
      <Buttons />
    </div>
  );
}

export default App;
