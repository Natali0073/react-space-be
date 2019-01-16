import * as React from 'react';
import { Component } from 'react';
import * as Profile from '../../assets/images/profile.svg';
import { homeData } from './home-mock';
import withStyles from '@material-ui/core/styles/withStyles';
import * as Spinner from '../common/Spinner/Spinner';

const styles = {
  icon: {
    opacity: 0.3
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: null,
      loading: true,
    }
  }

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
          <div>loading</div>
      )
    }
    return (
        <div>dsfgsdf</div>
    )
  }
}

export default withStyles(styles)(Home);

// <div className="home-container">
//   <div>
//     <div>
//       <img src={Profile} alt="Profile" width="200px"/>
//     </div>
//     <div className="contact-name">{personInfo.fullName}</div>
//     <div className="contact-name">{personInfo.position}</div>
//   </div>
//   <div>
//     <h3>Manager</h3>
//     <div>
//       {personInfo.manager.firstname} {personInfo.manager.lastname}
//     </div>
//   </div>
//   <div>
//     <h3>HR Manager</h3>
//     <div>
//       {personInfo.hrManager.firstname} {personInfo.hrManager.lastname}
//     </div>
//   </div>
//   <div>
//     <h3>Department</h3>
//     <div>
//       {personInfo.department}
//     </div>
  {/*</div>*/}
{/*</div>*/}