import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Test from './components/Test';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="test">Test</Link>
        <br />
        <Link to="about">About</Link>
        <br />

        <Route path="/test" exact component={Test} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
