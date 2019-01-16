import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
import {Redirect} from 'react-router';
import { Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({ spacing }: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: spacing.unit,
    marginRight: spacing.unit,
  },
  button: {
    margin: spacing.unit,
  },
});

class LoginComponent extends Component<LoginComponentProps, LoginComponentState>  {
  toastId = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectMe: false
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (name: string) => (event: any) => {
    this.setState({
      [name]: event.target.value,
    })
  };

  handleSubmit(event: any) {
    event.preventDefault();
    if (this.state.email === 'test@gmail.com' && this.state.password === '12345') {
      this.setState({
        redirectMe: true
      })
    } else {
      if (! toast.isActive(this.toastId)) {
        this.toastId = toast.error('Email or password incorrect');
      }
    }
  }

  render() {
    let { redirectMe } = this.state;
    if(redirectMe) {
      return (
          <Redirect to="/home"/>
      );
    }
    const {classes} = this.props;
    return (
        <div className="login-component">
          <Typography variant="h6" color="inherit">
            Login
          </Typography>
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

export default withStyles(styles)(LoginComponent);

export interface LoginComponentProps {
  classes: any;
}

export interface LoginComponentState {
  email: string;
  password: string;
  redirectMe?: boolean;
  [x: string]: any;
}