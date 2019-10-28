import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import Lamp from './components/Lamp';
import AtWork from './components/AtWork';
import QuoteForm from './components/quoteForm/QuoteForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteForm/>
      <QuoteList/>
      <QuoteCard/>
      <Lamp/>
      <Lamp on/>
      <AtWork />
    </div>
  );
}

export default App;
