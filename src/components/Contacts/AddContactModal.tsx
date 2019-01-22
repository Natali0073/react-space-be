import React, {Component} from 'react';
import {Dialog, Theme} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = ({spacing}: Theme) => createStyles({
  formControl: {
    margin: spacing.unit,
    minWidth: 150,
  },

  selectFormControl: {
    margin: spacing.unit,
    minWidth: 167,
  }
});

class AddContactModal extends Component<AddContactModalProps, AddContactModalState> {
  positions: string[] = [
    'Trainee Front-end developer',
    'Junior Front-end developer',
    'Trainee Java developer',
    'Junior Java developer'];

  office: string[] = ['Lviv', 'Ivano-Frankivsk'];

  state = {
    name: '',
    surname: '',
    email: '',
    personalEmail: '',
    position: '',
    office: '',
    phoneOne: '',
    phoneTwo: '',
    skype: '',
    birthDate: '',
  };

  handleClose = () => {
    // this.props.onClose(this.props.selectedValue);
  };

  render() {
    const {classes} = this.props;
    return (
        <Dialog onClose={this.handleClose} open={this.props.open} aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Create new Contact</DialogTitle>
          <DialogContent>
            <form action="">
              <Grid container justify="center" alignItems="center" className="info-row">
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={this.state.name}/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="surname"
                        label="Surname"
                        type="text"
                        fullWidth
                        value={this.state.surname}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" className="info-row">
                <Grid item>
                  <FormControl className={classes.selectFormControl}>
                    <InputLabel htmlFor="position">Position</InputLabel>
                    <Select value={this.state.position}
                            inputProps={{
                              id: 'position',
                            }}>
                      {this.positions.map(el =>
                          <MenuItem key={el} value={el}>{el}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.selectFormControl}>
                    <InputLabel htmlFor="office">Office</InputLabel>
                    <Select value={this.state.office}
                            inputProps={{
                              id: 'office',
                            }}>
                      {this.office.map(el =>
                          <MenuItem key={el} value={el}>{el}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" className="info-row">
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={this.state.email}/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="personalEmail"
                        label="Personal Email"
                        type="email"
                        fullWidth
                        value={this.state.personalEmail}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" className="info-row">
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phoneOne"
                        label="Phone one"
                        type="text"
                        fullWidth
                        value={this.state.phoneOne}/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phoneTwo"
                        label="Phone two"
                        type="text"
                        fullWidth
                        value={this.state.phoneTwo}/>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
    )
  }
}

export const SimpleDialogWrapped = withStyles(styles)(AddContactModal);

export interface AddContactModalProps {
  open: boolean;
  classes: any;
}

export interface AddContactModalState {
  name: string;
  surname: string;
  email: string;
  personalEmail: string;
  position: string;
  office: string;
  phoneOne: string;
  phoneTwo: string;
  skype: string;
  birthDate: string;
}
