import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import * as Home from '../Home/Home';
import * as LoginComponent from '../auth/LoginComponent/LoginComponent';
import * as Contacts from '../Contacts/Contacts';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/login" component={LoginComponent}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
