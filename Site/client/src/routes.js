import React from 'react';
import {Switch, Route} from 'react-router';

import Search from './pages/Search/search-page-component';
import Results from './pages/Results/results-page-component';

const getRoutes = (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Switch>
      { /* Home (main) route */ }
      <Route exact path="/" component={Search}/>

      { /* Routes */ }
      <Route path="/results" component={Results}/>

      { /* Catch all route */ }
      <Route path="*" component={Search}/>
    </Switch>
  );
};

export default getRoutes;
