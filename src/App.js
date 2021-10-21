import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
