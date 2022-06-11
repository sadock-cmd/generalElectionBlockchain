import React,{useState,useEffect} from 'react'
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Admin from './components/pages/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import firebase from './components/firebase'

import Login from './components/pages/Login'
import Privateroute from './private'
import Adminroute from './admin'

import Register from './components/pages/Register';

import Dashboarduser from './components/testingnav/sideApp';
import Election from './components/testingnav/pages/votingprocess/Votepapp'

import Members from './components/adminDashboard/sideApp'
import Electionresults from './components/adminDashboard/pages/votingprocess/Votepapp'

import Navigation from './components/landingPage/pageone';


function App() {
  
  
  return (
    <Router>
        <Switch>
          <Route path="/" exact><Navigation/> </Route> 
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register} />
          <Adminroute path="/admin"  exact component={Admin} sensitive/>
          <Privateroute path="/dash" exact component={Dashboarduser}/>
          <Privateroute path="/vote" exact component={Election}/>
          <Adminroute path="/members"  exact component={Members} sensitive/>
          <Adminroute path="/electionresults"  exact component={Electionresults} />
        </Switch>
    </Router>
  );
}

export default App;
