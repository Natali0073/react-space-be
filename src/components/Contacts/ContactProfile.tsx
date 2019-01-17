import React, {Component} from 'react';
import './contact-profile.scss';
import {contactsList} from './contacts-list-mock';
import InfoTextField from '../common/InfoTextField/InfoTextField';
import Grid from '@material-ui/core/Grid';
import Profile from '../../assets/images/profile.svg';
import withStyles from '@material-ui/core/styles/withStyles';
import {AccountCircle, LocationOn, DateRange, Phone, Email, QueryBuilder, Textsms} from '@material-ui/icons';
import {RouteComponentProps} from 'react-router';

const styles = {
  icon: {
    opacity: 0.3
  },
};

class ContactProfile extends Component<ContactProfileProps, ContactProfileState> {

  constructor(props: ContactProfileProps) {
    super(props);
    this.state = {
      contactId: this.props.match.params.id,
      contact: {} as Contact,
      loading: true
    }
  }

  componentDidMount() {
    let contacts = contactsList;
    contacts = contacts.filter(el => el.id === +this.state.contactId);
    this.setState({
      contactId: this.props.match.params.id,
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

export interface ContactProfileProps extends RouteComponentProps<any> {
  classes: {
    icon: string;
  };
}

export interface ContactProfileState {
  contactId: string;
  contact: Contact;
  loading: boolean;
}

export interface Contact {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneOne: string;
  phoneTwo: string | null;
  email: string;
  personalEmail: string;
  skype: string;
  position: string;
  office: string;
}