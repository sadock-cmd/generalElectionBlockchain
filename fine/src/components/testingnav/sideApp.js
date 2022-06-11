import React from 'react';
import './sidenav.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Logout from './pages/Logout';
import Sidenav from './sidenav';
import Vote from './pages/votingprocess/Votepapp';

import './bootstrap2.min.css';

function Dashboard() {
  return (
    <>
      <Router>
        {/* <Sidenav /> */}
        <Switch>
          <Route path='/dash' exact >
            <Sidenav/>
            <Home />
          </Route>
          <Route path='/vote'>
            <Sidenav />
            <Vote />
          </Route>
          {/* <Route path='/logout' component={Logout} /> */}
         
        </Switch>
      </Router>
    </>
  );
}

export default Dashboard;