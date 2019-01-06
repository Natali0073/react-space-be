import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = {
  navigation: {
    backgroundColor: 'transparent',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  render() {
    const {classes} = this.props;
    return (
        <div className="header">
          <AppBar position="static" color="default">
            <Toolbar>
              <Grid container direction="row"
                    justify="space-between"
                    alignItems="center">
                <Grid item xs>
                  <BottomNavigation
                      className={classes.navigation}
                      value={this.state.value}
                      onChange={this.handleChange}
                      showLabels>
                    <BottomNavigationAction label="Home" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Contacts" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Calendar" icon={<FavoriteIcon/>}/>
                  </BottomNavigation>
                </Grid>
                <Grid item>
                  <Button color="inherit">Logout</Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
