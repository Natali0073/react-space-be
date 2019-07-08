import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Notfound extends Component<{}, {}> {

  render() {
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center">
          <h2>Page not found</h2>
          <div><Link to='/'>Go to home page</Link></div>
        </Grid>
    )
  }
}

export default Notfound;