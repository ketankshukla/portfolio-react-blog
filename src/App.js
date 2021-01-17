import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import './App.css'
// comment
const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component = {HomePage} exact/>
      </div>
    </Router>
  );
}

export default App;
