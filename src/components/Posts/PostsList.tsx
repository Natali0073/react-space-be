import React, {Component} from 'react';
import './posts-list.scss';
import {connect} from 'react-redux';
import {StateReducer} from '../../interfaces/state';
import { getPosts } from '../../redux/actions';
import Spinner from '../common/Spinner/Spinner';
import { PostsListProps } from './posts-interfaces/PostsListStateProps';
import { List, ListItem } from '@material-ui/core/';
import {Link} from 'react-router-dom';

const mapStateToProps = (state: StateReducer) => {
  return { posts: state.posts };
};

class PostsList extends Component<PostsListProps, {}> {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const {posts} = this.props;
    if (!posts.length) {
      return (
              <Spinner />
      )
    }

    return (
            <div className="posts-list">
              {
                posts.map((el, index) => (
                <List key={index}>
                  <ListItem>
                    <Link to={`/posts/${el.id}`}>
                      <div className="post-item">{index + 1}. {el.title}</div>
                    </Link>
                  </ListItem>
                </List>
                ))
              }
            </div>
    )
  }
}

export default connect(mapStateToProps, { getPosts })(PostsList);

