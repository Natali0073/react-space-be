import React, {Component} from 'react';
import Home from '../Home/Home';
import LoginComponent from '../LoginComponent/LoginComponent';
import ContactsList from '../Contacts/ContactsList';
import ContactProfile from '../Contacts/ContactProfile';
import PostsList from '../Posts/PostsList';
import PostById from '../Posts/PostById';
import {Redirect, Route, Switch} from 'react-router';
import Notfound from '../common/NotFound/Notfound';

class Routes extends Component {
  render() {
    const loggedIn = localStorage.getItem('login') === 'true';
    const redirectTo = (url: string) => {
      return <Redirect to={url}/>;
    };
    return (
        <div className="routes">
          <Switch>
            <Route exact path="/" render={() => loggedIn ? <Home/> : redirectTo('/login')}/>
            <Route exact path="/home" render={() => loggedIn ? <Home/> : redirectTo('/login')}/>
            <Route exact path="/contacts" render={() => loggedIn ? <ContactsList/> : redirectTo('/login')}/>
            <Route exact path="/contacts/:id" render={(props) => (
                    loggedIn ? <ContactProfile {...props}/> : redirectTo('/login')
            )}/>
            <Route exact path="/posts" render={() => loggedIn ? <PostsList/> : redirectTo('/login')}/>
            <Route exact path="/posts/:id" render={(props) => (
                    loggedIn ? <PostById {...props}/> : redirectTo('/login')
            )}/>
            <Route exact path="/login" render={() => !loggedIn ? <LoginComponent/> : redirectTo('/home')}/>
            <Route exact path="/not-found" render={() => loggedIn ? <Notfound/> : redirectTo('/login')}/>
            <Route render={() => loggedIn ? <Redirect to='/not-found'/> : redirectTo('/login')}/>
          </Switch>
        </div>
    )
  }
}

export default Routes;
