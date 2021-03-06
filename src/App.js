import React from 'react';
import News from "./News";
import Playground from './Playground';
import Staff from './Staff';
import Doors from './Doors';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history'
import TopBar from './Top';
import { makeStyles } from '@mui/styles';
import bckg1 from './Images/bckg/02.jpg';

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    '& :before': {
      backgroundColor: 'red' //'rgba(35, 73, 104, 0.5)',
    },
    height: '100vh',
    flexDirection: 'column',
    background: `url(${bckg1}) no-repeat fixed`, //center top
    //backgroundColor: `${theme.palette.secondary.dark}`, //center top
    overflowY: 'scroll'
  },

}));

const newHistory = createBrowserHistory();

function App() {
  const classes = useStyles();
  return <Router history={newHistory}>
    <div className={classes.pageWrapper}>
      <TopBar />
      <Switch>
        <Route path="/news/:id" children={<News />} />
        <Route path="/playground" children={<Playground />} />
        <Route path="/staff" children={<Staff />} />
        <Route path="/doors/:id" children={<Doors />} />
        <Route path="/"><Redirect to="/news" /><News /></Route>
      </Switch>
    </div>
  </Router>
}

export default App;
