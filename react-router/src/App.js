import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopMenu from './components/TopMenu';
import Products from './components/pages/Products';

const Index = () => '<h2>Home</h2>';

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/index" exact component={Index} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;
