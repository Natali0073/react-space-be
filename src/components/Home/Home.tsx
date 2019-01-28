import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTechnology, deleteTechnology, getPersonData, getTechnologies} from '../../redux/actions';
import {Grid, Button, List, TextField} from '@material-ui/core';
import {withStyles, createStyles} from '@material-ui/core/styles/';
import Profile from '../../assets/images/profile.svg';
import Spinner from '../common/Spinner/Spinner';
import TechnologyItem from './TechnologyItem';
import {MyThunkDispatch, StateReducer} from '../../interfaces/state';
import { HomeProps, HomeState } from './home-interfaces/HomeStateProps';

const styles = () => createStyles({
      homeContainer: {
        marginTop: '20px'
      },
      infoContainer: {
        borderRight: '1px solid lightgray',
        textAlign: 'center'
      },
    }
);

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    addTechnology: (technology: string) => dispatch(addTechnology(technology)),
    deleteTechnology: (index: number) => dispatch(deleteTechnology(index)),
    getPersonData: () => dispatch(getPersonData()),
    getTechnologies: () => dispatch(getTechnologies()),
  };
};

const mapStateToProps = (state: StateReducer) => {
  return {
    personInfo: state.personInfo,
    technologiesList: state.technologiesList,
  };
};

class Home extends Component<HomeProps, HomeState> {
  state = {
    newTechnology: '',
  };

  componentDidMount() {
    this.props.getPersonData();
    this.props.getTechnologies();
  }

  handleDelete = (index: number) => {
    this.props.deleteTechnology(index);
  };

  handleAdd = () => {
    this.props.addTechnology(this.state.newTechnology);
    this.setState({newTechnology: ''});
  };

  render() {
    const {classes, technologiesList, personInfo} = this.props;

    if (!personInfo && !technologiesList.length) {
      return (
          <Spinner/>
      )
    }
    return (
        <div className={classes.homeContainer}>
          <Grid container spacing={16}>
            <Grid item xs={4} className={classes.infoContainer}>
              <div>
                <div>
                  <img src={Profile} alt="Profile" width="200px"/>
                </div>
                <div className="contact-name">{personInfo.fullName}</div>
                <div className="contact-name">{personInfo.position}</div>
              </div>
              <div>
                <h3>Manager</h3>
                <div>
                  {personInfo.manager.firstname} {personInfo.manager.lastname}
                </div>
              </div>
              <div>
                <h3>HR Manager</h3>
                <div>
                  {personInfo.hrManager.firstname} {personInfo.hrManager.lastname}
                </div>
              </div>
              <div>
                <h3>Department</h3>
                <div>
                  {personInfo.department}
                </div>
              </div>
            </Grid>
            <Grid item>
              <Grid container
                    spacing={16}
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Grid item>
                  <h3>Technologies</h3>
                </Grid>
                <Grid item>
                  <TextField
                      placeholder="Add technology"
                      type="text"
                      fullWidth
                      value={this.state.newTechnology}
                      onChange={(event) => this.setState({newTechnology: event.target.value})}/>

                </Grid>
                <Grid item>
                  <Button onClick={this.handleAdd}>
                    + Add
                  </Button>
                </Grid>
              </Grid>
              {
                technologiesList.length ?
                    <List>
                      {
                        technologiesList.map((el, index) => {
                          return (
                              <TechnologyItem key={index} item={el} index={index} handleDelete={this.handleDelete}/>
                          )
                        })
                      }
                    </List>
                    : <div>List is empty</div>

              }
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
