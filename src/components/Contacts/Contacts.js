import React, { Component } from 'react';
import {Route, Switch} from 'react-router';
import ContactsList from './ContactsList/ContactsList';
import ContactProfile from './ContactProfile/ContactProfile';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <Switch>
          <Route exact path='/contacts' component={ContactsList}/>
          <Route exact path='/contacts/:id' component={ContactProfile}/>
        </Switch>
      </div>
    )
  }
}

export default Contacts;