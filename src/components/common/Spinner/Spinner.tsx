import { Component } from 'react';
import CircularProgress from '../../Home/Home';
import React from 'react';
import Fade from '@material-ui/core/Fade';

class Spinner extends Component<SpinnerProps, {}> {

  render() {
    // return (
    //     <Fade
    //         in={this.props.loading}
    //         style={{transitionDelay: this.props.loading ? '800ms' : '0ms',}}
    //         unmountOnExit>
    //       <CircularProgress />
    //     </Fade>
    // )
    return (
        <div>sfdsf</div>
    )
}

}

export default Spinner;

export interface SpinnerProps {
  loading: boolean
}