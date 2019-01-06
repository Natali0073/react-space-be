import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import LoginComponent from '../auth/LoginComponent/LoginComponent';
import Contacts from '../Contacts/Contacts';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/contacts" component={Contacts}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
