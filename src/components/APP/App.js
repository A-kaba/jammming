import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <SearchBar />

      <div className='track-box'>
        <SearchResult />

      </div>
    </div>
  );
}

export default App;
