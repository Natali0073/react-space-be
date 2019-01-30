import React, { Component } from 'react';
import './home.scss';
import { connect } from 'react-redux';
import { addTechnology, deleteTechnology, getPersonData, getTechnologies } from '../../redux/actions';
import { Grid, Button, List, TextField } from '@material-ui/core';
import Profile from '../../assets/images/profile.svg';
import Spinner from '../common/Spinner/Spinner';
import TechnologyItem from './TechnologyItem';
import { MyThunkDispatch, StateReducer } from '../../interfaces/state';
import { HomeProps, HomeState } from './home-interfaces/HomeStateProps';

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

export class Home extends Component<HomeProps, HomeState> {
  state = {
    newTechnology: '',
  };

  componentDidMount() {
    this.props.getPersonData();
    this.props.getTechnologies();
  }

  handleDelete = (id: number) => {
    this.props.deleteTechnology(id);
  };

  handleAdd = () => {
    const lastItem = this.props.technologiesList[this.props.technologiesList.length - 1].id + 1;
    const newTechnology = {
      id: lastItem,
      name: this.state.newTechnology
    };
    this.props.addTechnology(newTechnology);
    this.setState({newTechnology: ''});
  };

  render() {
    const {classes, technologiesList, personInfo} = this.props;

    if (!personInfo && technologiesList && !technologiesList.length) {
      return (
              <Spinner/>
      )
    }
    return (
            <div className="home-container">
              <Grid container spacing={16}>
                <Grid item xs={4} className="info-container">
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
                      <Button onClick={this.handleAdd} id="test">
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
                                          <TechnologyItem key={index} item={el} index={index}
                                                          handleDelete={this.handleDelete}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
