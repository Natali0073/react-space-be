import React, {ChangeEvent, Component} from 'react';
import {AppBar, Toolbar, BottomNavigation, BottomNavigationAction, Grid, Tooltip, IconButton} from '@material-ui/core';
import {Home, People, ArrowForward, PersonAdd} from '@material-ui/icons';
import {Link, withRouter} from 'react-router-dom';
import './style.scss';
import {RouteComponentProps} from 'react-router';
import {SimpleDialogWrapped} from '../Contacts/AddContactModal';

class Header extends Component<RouteComponentProps, HeaderState> {
  public selectedTab: number;

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      open: false
    };
    this.selectedTab = 0;
  }

  handleChangeRouting = (event: ChangeEvent<{}>, value: number) => {
    const route = value === 0 ? '/home' : '/contacts';
    this.selectedTab = value;
    this.props.history.push(route);
  };

  handleAddContact = () => {
    this.setState({
      open: true
    })
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };

  handleLogout = () => {
    localStorage.setItem('login', 'false');
  };

  render() {
    this.selectedTab = ['/', '/home'].includes(this.props.location.pathname) ? 0 : 1;

    if (['/login', '/not-found'].includes(this.props.location.pathname)) {
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
                    value={this.selectedTab}
                    onChange={this.handleChangeRouting}
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
                {this.selectedTab === 1 ?
                    <Tooltip title="Add contact">
                      <IconButton aria-label="Add contact" onClick={this.handleAddContact}>
                        <PersonAdd/>
                      </IconButton>
                    </Tooltip> : null
                }
                <Tooltip title="Log out">
                  <IconButton aria-label="Log out" onClick={this.handleLogout}>
                    <Link to='/login' className="logoutButton"><ArrowForward/></Link>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
          <SimpleDialogWrapped open={this.state.open} onClose={this.handleCloseModal}/>
        </AppBar>
    )
  }
}

export default withRouter(Header);

export interface HeaderState {
  open: boolean;
}