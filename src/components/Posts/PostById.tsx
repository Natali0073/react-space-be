import React, { Component } from 'react';
import './post-by-id.scss';
import { getPostById } from '../../redux/actions/index';
import { connect } from 'react-redux';
import { StateReducer } from '../../interfaces/state';
import Spinner from '../common/Spinner/Spinner';
import { PostByIdProps } from './posts-interfaces/PostByIdStateProps';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';

const mapStateToProps = (state: StateReducer) => {
  return {postById: state.postById};
};

class PostById extends Component<PostByIdProps, {}> {

  componentDidMount() {
    this.props.getPostById(+this.props.match.params.id);
  }

  render() {
    const {postById} = this.props;

    if (!postById) {
      return (
              <Spinner />
      )
    }

    return (
            <Grid container className="post-by-id-container">
              <Grid item xs={6}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {postById.title}
                      </Typography>
                      <Typography component="p">
                        {postById.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
    )
  }
}

export default connect(mapStateToProps, {getPostById})(PostById);