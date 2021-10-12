import React from 'react';
import UpdatesPage from "./Updates";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

function App() {
  return <Router history={newHistory}>
    <Switch>
      <Route path="/news"><UpdatesPage /></Route>
      <Route path="/"><p1>This is a Glavnya str</p1></Route>
    </Switch>
  </Router>
}

export default App;
