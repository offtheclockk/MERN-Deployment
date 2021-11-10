import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Main from './views/Main'
import Detail from './views/Detail';
import Create from './views/Create';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/pirates/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
