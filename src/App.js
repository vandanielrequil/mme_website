import React from 'react';
import News from "./News";
import Playground from './Playground';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import TopBar from './Top';
import { makeStyles } from '@mui/styles';
import bckg1 from './Images/bckg/02.jpg';

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    height: '200vh',
    backgroundImage: `url(${bckg1})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    opacity: '0.999',
  }
}));

const newHistory = createBrowserHistory();


function App() {
  const classes = useStyles();
  return <Router history={newHistory}>
    <div className={classes.pageWrapper}>
      <TopBar />
      <Switch>
        <Route path="/playground"><Playground /></Route>
        <Route path="/news"><News /></Route>
        <Route path="/"><News /></Route>
      </Switch>
    </div>
  </Router>
}

export default App;
