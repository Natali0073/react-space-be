import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {Link, withRouter} from 'react-router-dom';
import './style.scss';
import {RouteComponentProps} from 'react-router';

class Header extends Component<RouteComponentProps, HeaderState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      value: ['/', '/home'].includes(this.props.location.pathname) ? 0 : 1,
    };
  }

  handleChange = (event: any, value: any) => {
    this.setState({value});
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
                {/*<BottomNavigation*/}
                {/*className="navigation"*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleChange}*/}
                {/*showLabels>*/}
                {/*<BottomNavigationAction*/}
                {/*label="Home"*/}
                {/*icon={<Home/>}*/}
                {/*component={Link}*/}
                {/*to="/home"/>*/}
                {/*<BottomNavigationAction*/}
                {/*label="Contacts"*/}
                {/*icon={<People/>}*/}
                {/*component={Link}*/}
                {/*to="/contacts"/>*/}
                {/*</BottomNavigation>*/}
                <Link to='/home'>Home</Link>
                <Link to='/contacts'>Contacts</Link>
              </Grid>
              <Grid item>
                <Tooltip title="Log out">
                  <IconButton aria-label="Log out">
                    <Link to='/login' className="logoutButton"><ArrowForward/></Link>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    )
  }
}

export default withRouter(Header);

export interface HeaderState {
  value: number;
}