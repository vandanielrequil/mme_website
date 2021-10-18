import React from 'react';
import News from "./News";
import Playground from './Playground';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import TopBar from './Top';

const newHistory = createBrowserHistory();

function App() {
  return <Router history={newHistory}>
    <TopBar />
    <Switch>
      <Route path="/playground"><Playground /></Route>
      <Route path="/news"><News /></Route>
      <Route path="/"><News /></Route>
    </Switch>
  </Router>
}

export default App;
