import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Card2 from './components/Card2';

function App() {
  return (
    <div className="App">
      <Card
        imageUrl="http://lorempixel.com/400/200/"
        children="Card body 1"
      />
      <Card2
        imageUrl="http://lorempixel.com/400/200/"
        children="Card body 2"
      />
    </div>
  );
}

export default App;
