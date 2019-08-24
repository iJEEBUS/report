import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

 // Routes for different pages
 import * as ROUTES from '../constants/routes';
 
 // Pages of the application
 import LandingPage from '../components/pages/LandingPage';
 import HomePage from '../components/pages/HomePage';
 import AccountPage from '../components/pages/AccountPage';
 import ProblemsPage from '../components/pages/ProblemsPage';
 


// TODO
// - firebase context in this class
// - user signup/login

class App extends Component {
  
  /**
   * Create the state of the application
   */
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      
    }
  }

  /**
   * Render the pages the user requests depending if they are logged in or not.
   */
  render(){
    return(
    <Router>
      { !this.state.loggedIn ? <Route exact path={ROUTES.LANDING} component={LandingPage} firebaseContext={null} /> : null }
      { this.state.loggedIn ? <Route path={ROUTES.HOME} component={HomePage} firebaseContext={null} /> : null }
      { this.state.loggedIn ? <Route path={ROUTES.ACCOUNT} component={AccountPage} firebaseContext={null} /> : null }
      { this.state.loggedIn ? <Route path={ROUTES.PROBLEMS} component={ProblemsPage} firebaseContext={null} />: null }      
      
    </Router>
    );
  }

}

export default App;
