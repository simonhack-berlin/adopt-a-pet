import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import PetDetailsPage from './page/details/PetDetailsPage';
import PetDetailsNotFound from './page/detailsNotFound/PetDetailsNotFound';
import HomePage from './page/home/Home';
import SearchPage from './page/search/SearchPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
      <Route path='/pet-details-not-found'>
      <PetDetailsNotFound />
      </Route>
      <Route path='/search'>
      <SearchPage />
      </Route>
      <Route path='/:type/:id'>
      <PetDetailsPage />
      </Route>
      <Route path='/:type?'>
      <HomePage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
