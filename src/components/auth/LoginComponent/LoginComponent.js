import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    // browserHistory.push('/login');
  }

  render() {
    const {classes} = this.props;
    return (
        <div className="login-component">
          <AppBar color="default" position="sticky">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container direction="column" alignItems="center">
            <form className={classes.container} onSubmit={this.handleSubmit.bind(this)}>
              <TextField
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  variant="outlined"
                  type="email"
                  name="email"
              />
              <TextField
                  label="Password"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                  variant="outlined"
                  type="password"
                  name="password"
              />
              <Button variant="outlined"
                      color="primary"
                      type="submit"
                      className={classes.button}
                      disabled={!this.validateForm()}>
                Submit
              </Button>
            </form>
          </Grid>
        </div>
    )
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);
