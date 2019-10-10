import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import Compteur from './components/atelierState'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteList/>
     <Compteur/>
    </div>
  );
}

export default App;
