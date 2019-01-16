import * as React from 'react';
import { Component } from 'react';
import './contact-profile.scss';
import { contactsList } from './contacts-list-mock';
import * as InfoTextField from '../common/InfoTextField/InfoTextField';
import Grid from '@material-ui/core/Grid';
import Profile from '../../assets/images/profile.svg';
import withStyles from '@material-ui/core/styles/withStyles';
import { AccountCircle, LocationOn, DateRange, Phone, Email, QueryBuilder, Textsms } from '@material-ui/icons';

const styles = {
  icon: {
    opacity: 0.3
  },
};

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
    const {classes} = this.props;
    const contact = this.state.contact;
    if (this.state.loading) {
      return (
          <p>Loading...</p>
      )
    }
    return (
        <div className="contact-profile-container">
          <div className="image-container">
            <img src={Profile} alt="Profile" width="200px"/>
          </div>
          <div className="contact-name">{contact.firstName} {contact.lastName}</div>
          <Grid container spacing={32} justify="center" alignItems="center" className="info-row">
            <Grid item xs={5}>
              <InfoTextField label={'POSITION'} value={contact.position}>
                <AccountCircle className={classes.icon}/>
              </InfoTextField>
            </Grid>
            <Grid item xs={5}>
              <InfoTextField label={'LOCATION'}
                             value={contact.office === 'LV' ? 'Lviv' : 'Ivano-Frankivsk'}>
                <LocationOn className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
          <Grid container spacing={32} justify="center" alignItems="center" className="info-row">
            <Grid item xs={5}>
              <InfoTextField label={'BIRTH'} value={contact.birthDate}>
                <DateRange className={classes.icon}/>
              </InfoTextField>
            </Grid>
            <Grid item xs={5}>
              <InfoTextField label={'SOMBRA MEMBER'} value={'-'}>
                <DateRange className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
          <Grid container spacing={32} justify="center" alignItems="center" className="info-row">
            <Grid item xs={5}>
              <InfoTextField label={'PHONE NUMBER'} value={contact.phoneOne}>
                <Phone className={classes.icon}/>
              </InfoTextField>
            </Grid>
            <Grid item xs={5}>
              <InfoTextField label={'ADDITIONAL PHONE'} value={contact.phoneTwo}
                             placeholder={'+38(###)-###-##-##'}>
                <Phone className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" className="info-row full-row">
            <Grid item xs={10}>
              <InfoTextField label={'CORPORATE EMAIL'} value={contact.email}>
                <Email className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" className="info-row full-row">
            <Grid item xs={10}>
              <InfoTextField label={'EMAIL'} value={contact.personalEmail}>
                <Email className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
          <Grid container spacing={32} justify="center" alignItems="center" className="info-row">
            <Grid item xs={5}>
              <InfoTextField label={'SKYPE'} value={contact.skype}>
                <Textsms className={classes.icon}/>
              </InfoTextField>
            </Grid>
            <Grid item xs={5}>
              <InfoTextField label={'LAST LOGIN'} value={'-'}>
                <QueryBuilder className={classes.icon}/>
              </InfoTextField>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default withStyles(styles)(ContactProfile);
