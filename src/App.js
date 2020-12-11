import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import CounterPage from './pages/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/home' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/counter' component={CounterPage} />
      </Router>
    </div>
  );
}

export default App;
