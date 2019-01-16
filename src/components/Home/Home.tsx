import React, { Component } from 'react';
import Profile from '../../assets/images/profile.svg';
import { homeData } from './home-mock';
import withStyles from '@material-ui/core/styles/withStyles';
import Spinner from '../common/Spinner/Spinner';

const styles = {
  icon: {
    opacity: 0.3
  },
};

class Home extends Component<{}, HomeState> {
  state = {
    personInfo: {} as PersonInfo,
    loading: true,
  };

  componentDidMount() {
    this.setState({
      personInfo: homeData,
      loading: true
    })
  }

  render() {
    const {personInfo, loading} = this.state;
    if (loading) {
      return (
          <Spinner loading={loading}/>
      )
    }
    return (
        <div className="home-container">
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


        </div>
    )
  }
}

export default withStyles(styles)(Home);

export interface HomeState {
  personInfo: PersonInfo;
  loading: boolean
}

export interface PersonInfo {
  fullName: string;
  position: string;
  manager: PersonCommon;
  hrManager: PersonCommon;
  department: string;
  id: number,
  email: string;
  mentor: string | null;
  office: string;
  roles: Role[],
  sombraMoney: string | null;
  vacationDaysLeft: number;
}

export interface PersonCommon {
  firstname: string;
  lastname: string;
  id: number;
  corporateEmail: string;
}

export interface Role {
  id: number;
  roleType: string;
}