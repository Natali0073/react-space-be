import {Component} from 'react';
import React from 'react';
import {CircularProgress, Grid} from '@material-ui/core';
import {createStyles, withStyles} from '@material-ui/core/styles';

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