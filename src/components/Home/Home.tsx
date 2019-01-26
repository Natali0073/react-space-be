import React, {Component} from 'react';
import Profile from '../../assets/images/profile.svg';
import {homeData} from './home-mock';
import Spinner from '../common/Spinner/Spinner';
import {PersonInfo} from '../../interfaces/personal-info';
import {Grid} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import TechnologyItem from './TechnologyItem';
import {connect} from 'react-redux';
import {addTechnology, deleteTechnology} from '../../redux/actions';
import {StateReducer} from '../../interfaces/state';
import TextField from '@material-ui/core/TextField';

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

function mapDispatchToProps(dispatch: any) {
  return {
    addTechnology: (technology: string) => dispatch(addTechnology(technology)),
    deleteTechnology: (index: number) => dispatch(deleteTechnology(index)),
  };
}

const mapStateToProps = (state: StateReducer) => {
  return { technologiesList: state.technologiesList };
};

class Home extends Component<HomeProps, HomeState> {
  state = {
    personInfo: {} as PersonInfo,
    loading: true,
    newTechnology: '',
  };

  componentDidMount() {
    this.setState({
      personInfo: homeData,
      loading: false
    })
  }

  handleDelete = (index: number) => {
    this.props.deleteTechnology(index);
  };

  handleAdd = () => {
    this.props.addTechnology(this.state.newTechnology);
    this.setState({newTechnology: ''});
  };

  render() {
    const {classes, technologiesList} = this.props;
    const {personInfo, loading} = this.state;

    if (loading) {
      return (
          <Spinner loading={loading}/>
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
                      onChange={(event) => this.setState({ newTechnology: event.target.value })}/>

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

interface HomeProps {
  classes: any;
  deleteTechnology: any;
  addTechnology: any;
  technologiesList: string[];
}

interface HomeState {
  personInfo: PersonInfo;
  loading: boolean;
  newTechnology: string;
}
