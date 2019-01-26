import {Component} from 'react';
import React from 'react';
import {CircularProgress} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const style = () => createStyles({
  spinnerContainer: {
    marginTop: 40
  }
});

class Spinner extends Component<SpinnerProps, {}> {

  render() {
    const {classes} = this.props;
    return (
        <Grid container
              justify="center"
              alignItems="center"
              className={classes.spinnerContainer}>
          <CircularProgress/>
        </Grid>
    )
  }

}

export default withStyles(style)(Spinner);

export interface SpinnerProps {
  classes: any;
}