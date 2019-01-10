import React, { Component } from 'react';
import { contactsList } from './contacts-list-mock';
import InfoTextField from '../common/InfoTextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

class ContactProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactId: props.match.params.id,
      contact: {},
      loading: true
    }
  }

  componentDidMount() {
    let contacts = contactsList;
    contacts = contacts.filter(el => el.id === +this.state.contactId);
    this.setState({
      contact: contacts[0],
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
          <p>Loading...</p>
      )
    }
    return (
        <div>
          <div>{this.state.contact.firstName} {this.state.contact.lastName}</div>
          <Grid container spacing={32} justify="center" alignItems="center">
            <Grid item>
              <InfoTextField label={'Position'} value={'Value'}><AccountCircle /></InfoTextField>
            </Grid>
            <Grid item>
              <InfoTextField label={'Position'} value={'Value'}><AccountCircle /></InfoTextField>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default ContactProfile;
