import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import ArrowForward from '@material-ui/icons/ArrowForward';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {Link, withRouter} from 'react-router-dom';
import './style.scss';
import {RouteComponentProps} from 'react-router';
import {SimpleDialogWrapped} from '../Contacts/AddContactModal';

class Header extends Component<RouteComponentProps, HeaderState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      value: ['/', '/home'].includes(this.props.location.pathname) ? 0 : 1,
      open: false
    };
  }

  handleChange = (event: object, value: number) => {
    this.setState({value});
    const route = value === 0 ? '/home' : '/contacts';
    this.props.history.push(route);
  };

  handleAddContact = () => {
    this.setState({
      open: true
    })
  };

  render() {
    if (this.props.location.pathname === '/login') {
      return null;
    }
    return (
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container direction="row"
                  justify="space-between"
                  alignItems="center">
              <Grid item xs>
                <BottomNavigation
                    className="navigation"
                    value={this.state.value}
                    onChange={this.handleChange}
                    showLabels={true}>
                  <BottomNavigationAction
                      label="Home"
                      icon={<Home/>}/>
                  <BottomNavigationAction
                      label="Contacts"
                      icon={<People/>}/>
                </BottomNavigation>
              </Grid>
              <Grid item>
                <Tooltip title="Add contact">
                  <IconButton aria-label="Add contact" onClick={this.handleAddContact}>
                    <PersonAdd/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Log out">
                  <IconButton aria-label="Log out">
                    <Link to='/login' className="logoutButton"><ArrowForward/></Link>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
          <SimpleDialogWrapped open={this.state.open}/>
        </AppBar>
    )
  }
}

export default withRouter(Header);

export interface HeaderState {
  value: number;
  open: boolean;
}