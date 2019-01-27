import React, {BaseSyntheticEvent, Component, FormEvent} from 'react';
import {
  Theme,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button
} from '@material-ui/core';
import {withStyles, createStyles} from '@material-ui/core/styles';
import {addContact} from '../../redux/actions';
import {connect} from 'react-redux';
import {ContactsListDTO} from '../../interfaces/contact';
import {Dispatch} from 'redux';

const styles = ({spacing}: Theme) => createStyles({
  formControl: {
    margin: spacing.unit,
    minWidth: 150,
  },

  selectFormControl: {
    margin: spacing.unit,
    minWidth: 167,
    maxWidth: 167,
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addContact: (contact: ContactsListDTO) => dispatch(addContact(contact))
  };
};

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

  handleCancel = () => {
    this.props.onClose();
  };

  handleChange = (name: string) => (event: BaseSyntheticEvent) => {
    this.setState({
      [name]: event.target.value,
    })
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newContact = {
      birthDate: '1995-10-17',
      email: this.state.email,
      firstName: this.state.name,
      id: Math.floor(Math.random() * Math.floor(300)),
      lastName: this.state.surname,
      office: this.state.office,
      personalEmail: this.state.personalEmail ? this.state.personalEmail : null,
      phoneOne: this.state.phoneOne,
      phoneTwo: this.state.phoneOne ? this.state.phoneOne : null,
      position: this.state.position,
      skype: this.state.skype,
    };

    this.props.addContact(newContact);

    this.setState({
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
    });

    this.props.onClose();
  };

  render() {
    const {classes} = this.props;
    return (
        <Dialog open={this.props.open} aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Create new Contact</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                        value={this.state.name}
                        onChange={this.handleChange('name')}/>
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
                        value={this.state.surname}
                        onChange={this.handleChange('surname')}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" className="info-row">
                <Grid item>
                  <FormControl className={classes.selectFormControl}>
                    <InputLabel htmlFor="position">Position</InputLabel>
                    <Select value={this.state.position}
                            onChange={this.handleChange('position')}
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
                            onChange={this.handleChange('office')}
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
                        value={this.state.email}
                        onChange={this.handleChange('email')}/>
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
                        value={this.state.personalEmail}
                        onChange={this.handleChange('personalEmail')}/>
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
                        value={this.state.phoneOne}
                        onChange={this.handleChange('phoneOne')}/>
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
                        value={this.state.phoneTwo}
                        onChange={this.handleChange('phoneTwo')}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justify="flex-start" className="info-row">
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="skype"
                        label="Skype"
                        type="text"
                        fullWidth
                        value={this.state.skype}
                        onChange={this.handleChange('skype')}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" onClick={this.handleCancel}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
    )
  }
}

export const SimpleDialogWrapped = connect(null, mapDispatchToProps)(withStyles(styles)(AddContactModal));

interface AddContactModalProps {
  open: boolean;
  classes: AddContactModalClasses;
  onClose: any;
  addContact: any;
}

interface AddContactModalClasses {
  formControl: string;
  selectFormControl: string;
}

interface AddContactModalState {
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
  [key: string]: string;
}
