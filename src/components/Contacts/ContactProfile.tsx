import React, {Component} from 'react';
import './contact-profile.scss';
import InfoTextField from '../common/InfoTextField/InfoTextField';
import {Grid} from '@material-ui/core';
import Profile from '../../assets/images/profile.svg';
import withStyles from '@material-ui/core/styles/withStyles';
import {AccountCircle, LocationOn, DateRange, Phone, Email, QueryBuilder, Textsms} from '@material-ui/icons';
import {RouteComponentProps} from 'react-router';
import {ContactsListDTO} from '../../interfaces/contact';
import {connect} from 'react-redux';
import {getContactById} from '../../redux/actions';
import {MyThunkDispatch, StateReducer} from '../../interfaces/state';
import Spinner from '../common/Spinner/Spinner';

const styles = {
  icon: {
    opacity: 0.3
  },
};

const mapStateToProps = (state: StateReducer) => {
  return {contactById: state.contactById};
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) => ({
  getContactById: (id: number) => dispatch(getContactById(id))
});

class ContactProfile extends Component<ContactProfileProps, {}> {

  componentDidMount() {
    this.props.getContactById(+this.props.match.params.id);
  }

  render() {
    const {classes} = this.props;
    const contact = this.props.contactById;

    if (!contact) {
      return (
          <Spinner/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContactProfile));

interface ContactProfileProps extends RouteComponentProps<any> {
  classes: ContactProfileClasses;
  getContactById: any;
  contact: ContactsListDTO;
  contactById: ContactsListDTO;
}

interface ContactProfileClasses {
  icon: string;
}
