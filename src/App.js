import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import HomePage from './page/home/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
      <Route path='/:type?'>
      <HomePage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
